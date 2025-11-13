# Documentation Cleanup Plan

## Current Status
- **23 .md files** in repository
- README.md shows outdated version (1.0.0 instead of 1.0.7)
- Many development/troubleshooting files from fix process
- No CHANGELOG.md

---

## Proposed Structure

### Keep (Essential Documentation):
```
README.md                     # Main documentation (UPDATE VERSION)
VERSION_POLICY.md             # Important: version increment rules
HOW_TO_PACKAGE_PLUGIN.md     # Important: packaging instructions
CUSTOMIZATION.md              # User-facing customization guide
LICENSE                       # Required
```

### Create New:
```
CHANGELOG.md                  # Version history and changes
CONTRIBUTING.md               # How to contribute (optional)
```

### Archive (Move to /docs):
```
UPLOAD_INSTRUCTIONS.md        # Technical upload guide
TARGETATTRIBUTE_FIX.md       # Technical fix details
SCHEMA_FIX_SUMMARY.md        # Technical fix details
UPLOAD_FIX_SUMMARY.md        # Technical fix details
QUICK_REFERENCE.md           # Developer reference
PR_WORKFLOW_COMPLETE.md      # Workflow documentation
WORKFLOW_SUMMARY_WITH_VERSION.md  # Workflow documentation
```

### Delete (Development History - No Longer Needed):
```
AUDIT_REPORT.md              # Old development audit
AUDIT_SUMMARY.md             # Old development audit
BRANCH_CLEANUP_INSTRUCTIONS.md   # Completed task
CLEANUP_VERIFIED.md          # Completed task
DEPLOYMENT_SUCCESS.md        # Old development status
FINAL_FIXES_v1.0.3.md       # Version-specific troubleshooting
FINAL_SUMMARY_v1.0.5.md     # Version-specific troubleshooting
GITHUB_BRANCH_CLEANUP_GUIDE.md   # General GitHub guide
MERGE_COMPLETE.md            # Old merge document
MERGE_COMPLETE_v1.0.6.md    # Version-specific merge
PROJECT_SUMMARY.md           # Old project summary
RESTRUCTURE_COMPLETE.md      # Old development status
```

---

## Actions Required

### 1. Update README.md
- Change version badge from 1.0.0 to 1.0.7
- Update any version references in text

### 2. Create CHANGELOG.md
Document version history:
- 1.0.7 - Current stable version
- 1.0.6 - Fixed targetAttribute
- 1.0.5 - Simplified package.json
- etc.

### 3. Create /docs Directory
```bash
mkdir docs
mv UPLOAD_INSTRUCTIONS.md docs/
mv TARGETATTRIBUTE_FIX.md docs/
# etc.
```

### 4. Delete Obsolete Files
```bash
git rm AUDIT_REPORT.md AUDIT_SUMMARY.md
git rm BRANCH_CLEANUP_INSTRUCTIONS.md
# etc.
```

---

## Recommended Final Structure

```
/
├── README.md                     # Main docs (v1.0.7)
├── CHANGELOG.md                  # Version history (NEW)
├── LICENSE                       # License file
├── VERSION_POLICY.md             # Version rules
├── HOW_TO_PACKAGE_PLUGIN.md     # Packaging guide
├── CUSTOMIZATION.md              # User customization
├── docs/                         # Technical docs (NEW)
│   ├── UPLOAD_INSTRUCTIONS.md
│   ├── TARGETATTRIBUTE_FIX.md
│   ├── SCHEMA_FIX_SUMMARY.md
│   ├── QUICK_REFERENCE.md
│   └── WORKFLOW_SUMMARY.md
├── bower.json
├── package.json
├── properties.schema
├── example.json
├── schema/
│   └── component.schema.json
├── js/
├── less/
├── templates/
└── example/
```

---

## Benefits

1. **Cleaner root directory** - Only essential docs visible
2. **Clear version tracking** - CHANGELOG.md
3. **Updated README** - Shows current version
4. **Organized technical docs** - In /docs folder
5. **Removed clutter** - No development history files

---

## Execution Order

1. Create CHANGELOG.md
2. Update README.md version
3. Create /docs directory
4. Move technical docs to /docs
5. Delete obsolete files
6. Commit: "docs: cleanup and organize documentation for v1.0.7"
7. Increment version to 1.0.8

---

**Should I proceed with this cleanup?**
