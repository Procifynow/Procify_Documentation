#!/usr/bin/env bash
# Adds sidebar_custom_props.badges to every release note and removes old sidebar_class_name.
# Run from the repo root:  bash add-sidebar-badges.sh
cd "docs/Docs/Release Notes" || exit 1   # adjust if your path differs (e.g. procify/docs/Docs/Release Notes)
 
for f in *.md; do
  grep -q '^sidebar_custom_props:' "$f" && { echo "already $f"; continue; }
  v="${f%% *}"                                   # version = first word of the file name
  case "$v" in *.0.0) b="major";; *.0) b="minor";; *) b="patch";; esac
  grep -q 'hotfix-pill' "$f" && b="$b, hotfix"   # hotfix notes carry a hotfix pill in the body
  [ "$v" = "7.2.375" ] && b="latest, $b"         # newest release
  perl -0pi -e "s{^(sidebar_label:[^\n]*\n)}{\$1sidebar_custom_props:\n  badges: [$b]\n}m" "$f"
  sed -i '/^sidebar_class_name:/d' "$f"
  echo "updated $f -> [$b]"
done