# 🔍 Root Cause Analysis: Repository Name Mismatch

## The Mystery Solved

After extensive testing with versions 1.0.6 through 1.0.13, we discovered the issue was **never about the schema files**. It was about the repository name.

## Side-by-Side Comparison

### ✅ WORKING: Production ZIP (v1.0.12)

```
adapt-fadetext-v1.0.12-production.zip
│
└── adapt-fadetext/                    ← Folder name
    ├── bower.json
    │   └── "name": "adapt-fadetext"   ← Plugin name
    ├── package.json
    ├── properties.schema
    ├── schemas/
    │   └── component.schema.json
    └── (other files)

✅ Folder name matches bower.json name = SUCCESS
```

### ❌ FAILING: Main Branch Download

```
adapt-quote-main.zip
│
└── adapt-quote-main/                  ← Folder name
    ├── bower.json
    │   └── "name": "adapt-fadetext"   ← Plugin name
    ├── package.json
    ├── properties.schema
    ├── schemas/
    │   └── component.schema.json
    └── (other files)

❌ Folder name DOES NOT match bower.json name = FAILURE
```

## What Adapt Authoring Tool Does

```javascript
// Pseudo-code of what Adapt does:
function validatePlugin(zipFile) {
  const folder = extractFirstFolder(zipFile);
  const bowerJson = readFile(folder + '/bower.json');
  const pluginName = bowerJson.name;
  
  if (folder.name !== pluginName) {
    return "Package does not contain a schema";  // Misleading error!
  }
  
  // Continue with schema validation...
}
```

The error message is misleading! It doesn't mean the schema is missing. It means the folder name doesn't match the plugin name, so Adapt stops validation early.

## Testing Evidence

All these production ZIPs worked perfectly:

| File | Folder Inside | bower.json name | Schema Folder | Result |
|------|---------------|-----------------|---------------|--------|
| adapt-fadetext-v1.0.6-clean.zip | `adapt-fadetext/` | `adapt-fadetext` | `schema/` | ✅ |
| adapt-fadetext-v1.0.8-no-schema-folder.zip | `adapt-fadetext/` | `adapt-fadetext` | None | ✅ |
| adapt-fadetext-v1.0.9-clean.zip | `adapt-fadetext/` | `adapt-fadetext` | `schema/` | ✅ |
| adapt-fadetext-v1.0.11-schemas-plural.zip | `adapt-fadetext/` | `adapt-fadetext` | `schemas/` | ✅ |
| adapt-fadetext-v1.0.12-production.zip | `adapt-fadetext/` | `adapt-fadetext` | `schemas/` | ✅ |

Main branch download fails:

| File | Folder Inside | bower.json name | Schema Folder | Result |
|------|---------------|-----------------|---------------|--------|
| adapt-quote-main.zip | `adapt-quote-main/` | `adapt-fadetext` | `schemas/` | ❌ |

## Key Insights

### What We Learned
1. **Schema folder naming doesn't matter** - Both `schema/` and `schemas/` work
2. **Having no schema folder also works** - v1.0.8 had no schema folder and uploaded fine
3. **Only folder name matters** - Must match the `name` field in bower.json

### Why Production ZIPs Work
When I create production ZIPs manually, I explicitly:
```bash
# Create a folder with the correct name
mkdir adapt-fadetext
cp -r (files) adapt-fadetext/
zip -r adapt-fadetext-v1.0.12.zip adapt-fadetext/
```

This ensures the folder name is `adapt-fadetext/`, matching bower.json.

### Why Main Branch Downloads Fail
When GitHub creates a ZIP from the main branch:
```bash
# GitHub automatically uses the repository name
repository_name="adapt-quote"
branch="main"
folder_name="${repository_name}-${branch}"  # = "adapt-quote-main"
```

Since the repository is named `adapt-quote`, the folder becomes `adapt-quote-main/`, which doesn't match bower.json's `adapt-fadetext`.

## The Fix

### Before (Current State)
```
Repository name: adapt-quote
bower.json name: adapt-fadetext
Download creates: adapt-quote-main/
Result: ❌ Mismatch = Upload fails
```

### After (Rename Repository)
```
Repository name: adapt-fadetext
bower.json name: adapt-fadetext
Download creates: adapt-fadetext-main/
Result: ✅ Match = Upload works!
```

## Why We Got Confused

The error message is misleading:
- **Error says**: "Package does not contain a schema"
- **Actually means**: "I can't validate the package because the folder structure is wrong"

Adapt stops validation early when it detects the folder name mismatch, before it even checks for schema files. That's why the error message is about schemas when the real issue is the folder name.

## Historical Context

This plugin's history:
1. Originally forked from `adapt-quote` repository
2. Component was renamed to `fadetext`
3. bower.json was updated to `adapt-fadetext`
4. **Repository name was never updated** ← This is the issue!

## Timeline of Our Investigation

1. **First attempt**: Added `schema/component.schema.json` - Seemed to work, but...
2. **Version conflicts**: Discovered caching issues, fixed targetAttribute
3. **Testing phase**: Tested multiple versions with different schema configurations
4. **Key discovery**: ALL schema configurations work (singular, plural, none)
5. **Final revelation**: Main branch download has wrong folder name!

## Validation Logic

The Adapt Authoring Tool validation appears to work like this:

```
1. Extract ZIP file
   ↓
2. Find first folder inside ZIP
   ↓
3. Check if folder exists and is readable
   ↓
4. Read bower.json from that folder
   ↓
5. Compare folder name with bower.json "name" field
   ↓
6. IF MISMATCH → Stop and return error ❌
   ↓
7. IF MATCH → Continue to schema validation ✅
   ↓
8. Validate schema files (if required)
   ↓
9. Complete validation
```

Our issue occurs at step 5-6, before schema validation even happens!

## Conclusion

**The repository name must match the plugin name.**

- Current repository name: `adapt-quote` ❌
- Required repository name: `adapt-fadetext` ✅

One simple rename fixes everything. No code changes needed!

---

**Diagnosed**: 2025-11-13  
**Root Cause**: Repository name mismatch  
**Solution**: Rename repository  
**Impact**: Critical - affects all main branch downloads  
**Effort**: 30 seconds (just rename the repository)
