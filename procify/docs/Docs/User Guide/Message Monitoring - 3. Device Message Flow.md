---
sidebar_position: 503
sidebar_label: "Device Message Flow"
title: "Message Monitoring — Device Message Flow"
---

# Message Monitoring — Device Message Flow

## 2.1. Multiple Logins Can Create Active Endpoints

When an application team logs in from multiple or random devices without properly deboarding the previous devices, those devices can continue to be considered active endpoints.

As a result, messages may continue to be generated for these endpoints even though the application team is no longer actively using them.

Platform Reference: Account Console 7.0 \- User Guide — "Whenever any new user registers in the application, a new endpoint ID is created against that account... when they log in again the status becomes Active." Each login is a distinct endpoint; none are deregistered automatically on crash or app closure.

## 2.2 Messages Can Accumulate in the Queue

Because these endpoints remain active, messages generated for them may not be synchronized with the device immediately. Over time, a large number of messages can accumulate in the queue.

This can give the impression that a large number of messages are stuck.

**Platform Reference:** Message Monitoring 7.0 \- User Guide — In-Queue is defined as "all the data that are currently present in the device\_q and which are not processed yet." A high In-Queue count reflects endpoints awaiting sync, not failed or lost messages.

## 

## 2.3. Messages Are Synchronized When the Device Becomes online

When the corresponding device comes online , the queued messages are synchronized with the device.

Once the server successfully sends the messages and receives the required acknowledgment from the client, the messages move to Success.

If the device is offline, the messages remain in the queue until the device becomes available.

Platform Reference: Message Monitoring 7.0 \- User Guide — device\_q entries move to device\_log\_q (Success) or device\_error\_q (Failed) only after processing; until then they remain In-Queue, consistent with holding messages for an offline device until it reconnects.

## 2.4 Device-Side Processing vs. Server Status

A message can reach the device successfully, but the actual processing on the device may still fail.

From the server's perspective, the message can be marked as Success when the client acknowledges that the message was received while the device was online. Therefore, Success on the server does not necessarily mean that the message was successfully processed by the application on the device.

Platform Reference: Message Monitoring 7.0 \- User Guide — "In device info, every message is sent or is in the process of being successfully sent. So, every message is outgoing and never fails. Hence, It goes from in-queue to success." This confirms Success tracks the send/acknowledgment, not on-device application processing.

## 2.5 Application Team Awareness

The application team may not be aware that previously used devices are still registered as active endpoints. This can result in messages continuing to be generated and queued for those endpoints.

Note: This is a training/visibility gap rather than a platform defect. Recommend making Sections 1–4 of this topic available to application teams so "stuck message" reports can be self-diagnosed before being escalated as incidents.

## 2.6 Automatic Endpoint Cleanup Scheduler

A scheduler runs every Sunday to clean up old endpoints.

Note: The scheduler currently deboards endpoints that have been inactive for more than 7 days.

Once an endpoint is deboarded, its corresponding entry is removed from the endpoint table.

| Property | Value |
| :---- | :---- |
| Class name | deboardInactiveUsers |
| CRON expression | 0 0 0 ? \* SUN \*  (every Sunday at midnight) |
| Current inactivity threshold (this environment) | 7 days |
| Platform default threshold | 15 days — this environment has been configured below the default |
| Channel type | BOTH, unless restricted to DEVICE or BROWSER |
| Table cleaned up | Endpoint's entries removed from madm\_ep\_apps |

Platform Reference: Account Console 7.0 \- User Guide — "Deboard Inactive Users": CRON Job Expression 0 0 0 ? \* SUN \*, class deboardInactiveUsers, parameters No\_of\_inactive\_days {default: 15} and Channel\_type {default: BOTH}; "this scheduler will deboard all the users who are inactive since given days and it will delete the entry of all deboarded endpoints from madm\_ep\_apps."

## 2.7 Scheduler Customization

If the default 7-day cleanup period does not meet the application's requirements, the scheduler can be customized to use a different endpoint deboarding period.

To change it:

1. Go to the job-instances page in Cockpit and locate the deboardInactiveUsers job.

2. Open the job instance's parameters.

3. Update No\_of\_inactive\_days to the desired threshold.

4. Update Channel\_type if the cleanup should be restricted to a specific channel.

5. Save. The new threshold takes effect on the job's next scheduled run (the following Sunday, per the fixed CRON expression).

Note: The CRON schedule itself (currently fixed to Sunday) is a separate setting from the inactivity threshold — changing how often the job runs, as opposed to how many inactive days it waits, would need to be confirmed as in-scope for this customization request.
