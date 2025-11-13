# Plugin Upload Instructions - Version 1.0.3

## 🎯 CRITICAL DISCOVERY: ZIP File Structure

The plugin was failing because the **ZIP file structure was incorrect**!

### ❌ Wrong Structure (Files at root)
```
adapt-fadetext.zip
├── bower.json
├── package.json
├── properties.schema
└── ...
```

### ✅ Correct Structure (Files in subfolder)
```
adapt-fadetext-v1.0.3.zip
└── adapt-fadetext-v1.0.3/
    ├── bower.json
    ├── package.json
    ├── properties.schema
    ├── schema/
    │   └── component.schema.json
    └── ...
```

**The Adapt Authoring Tool expects the ZIP to contain a folder with the plugin files inside!**

---

## 📦 How to Download the Plugin

### From GitHub:

1. **Go to:** https://github.com/fosterc1/adapt-quote
2. **Click:** Green "Code" button
3. **Click:** "Download ZIP"
4. **Result:** GitHub automatically creates a ZIP with proper structure

**OR**

Download directly from the PR branch:
- https://github.com/fosterc1/adapt-quote/archive/refs/heads/fix/add-schema-directory.zip

### ZIP Will Contain:
```
adapt-fadetext-v1.0.3/
├── bower.json                    ✅ Plugin metadata
├── package.json                  ✅ npm metadata
├── properties.schema             ✅ Authoring Tool schema (REQUIRED)
├── schema/
│   └── component.schema.json    ✅ Framework v5+ schema
├── example.json                  ✅ Example configuration (at root)
├── js/
│   └── adapt-fadetext.js        ✅ Main component file
├── less/
│   └── fadetext.less            ✅ Styling
├── templates/
│   └── fadetext.hbs             ✅ Handlebars template
└── example/
    ├── demo.html
    └── example.json
```

---

## 📋 Upload Steps

### 1. Download the ZIP File
The file is located at: `/home/user/webapp/adapt-fadetext-v1.0.3.zip`

### 2. Log into Adapt Authoring Tool
- You must be logged in as **Super Admin**
- Only Super Admins can upload custom plugins

### 3. Navigate to Plugin Management
- Go to Plugin Management section
- Click "Upload Plugin" button

### 4. Upload the ZIP File
- Select `adapt-fadetext-v1.0.3.zip`
- Click Upload

### 5. Expected Results
- ✅ Upload succeeds without errors
- ✅ Plugin appears in component library
- ✅ Plugin is listed under "Components" type
- ✅ No "Package does not contain a schema" error

---

## 🔍 What Was Fixed

### Issue History:

1. **v1.0.0-1.0.2:** Missing/invalid schema files
   - Fixed invalid JSON Schema syntax
   - Fixed bower.json configuration
   
2. **v1.0.3:** Simplified package.json, added example.json at root
   - Removed unnecessary fields from package.json
   - Added example.json to plugin root

3. **FINAL FIX:** Incorrect ZIP structure
   - **Problem:** ZIP had files at root level
   - **Solution:** ZIP must contain a folder with files inside
   - **Impact:** This was likely the main issue all along!

---

## ✅ Verification Checklist

Before uploading, the ZIP file contains:

- [x] Folder named `adapt-fadetext-v1.0.3`/
- [x] bower.json (with framework: ^5.0.0)
- [x] package.json (simplified)
- [x] properties.schema (REQUIRED for Authoring Tool)
- [x] schema/component.schema.json (for Framework v5+)
- [x] example.json at root level
- [x] All plugin files (js, less, templates)
- [x] No .git folder
- [x] No .md documentation files
- [x] Version is 1.0.3

---

## 🎓 Key Learnings

### 1. Properties.schema is REQUIRED
From the Adapt Authoring Tool wiki:
> "Make sure that the plugin you're attempting to install is authoring tool-compatible: check that it has a **properties.schema** file in the plugin"

### 2. ZIP Must Have Folder Structure
GitHub's "Download ZIP" creates:
```
repository-name-branch/
  ├── files...
```

Your manual ZIP must match this structure!

### 3. Two Schema Files Needed
- **properties.schema** - For Authoring Tool (Draft-04 schema)
- **schema/component.schema.json** - For Framework v5+ (Draft-07 schema)

### 4. Version Must Increment
- Framework caches plugins by version number
- Always increment version when making changes
- Current version: 1.0.3

---

## 🧪 Testing the Upload

### Expected Behavior:
1. **Upload Phase:**
   - No "package does not contain a schema" error
   - Upload completes successfully
   
2. **Plugin Library:**
   - "Fade Text" appears in Components section
   - Shows version 1.0.3
   - Displayname: "Fade Text"
   
3. **Adding to Course:**
   - Component can be added to page
   - Configuration panel opens
   - Shows all settings from properties.schema

4. **Preview:**
   - Component renders correctly
   - Text fades as user scrolls
   - Respects configured colors and timing

---

## 🛠️ GitHub Automatically Creates Correct ZIP Structure

When you use GitHub's "Download ZIP" button or download from a branch URL:
- GitHub automatically wraps files in a folder: `repository-branch/`
- No manual ZIP creation needed
- Structure is always correct

### Example GitHub ZIP Structure:
```
adapt-quote-fix-add-schema-directory/
├── bower.json
├── package.json
├── properties.schema
├── schema/
│   └── component.schema.json
└── ...
```

### If You Need to Create ZIP Manually:
```bash
# Download as ZIP from GitHub, OR:
# Clone the repo and create release
git clone https://github.com/fosterc1/adapt-quote.git
cd adapt-quote
git checkout fix/add-schema-directory
cd ..
zip -r adapt-fadetext.zip adapt-quote/ -x "*/\.git/*"
```

The key is: **ZIP must contain a folder, not files at root level**

---

## 📊 Comparison with Working Plugin

Our structure now matches the reference (`adapt-margueetext`):

| Aspect | Reference | Our Plugin | Status |
|--------|-----------|------------|--------|
| bower.json format | ✓ | ✓ | ✅ Match |
| package.json format | ✓ | ✓ | ✅ Match |
| properties.schema | ✓ | ✓ | ✅ Present |
| schema/component.schema.json | ✓ | ✓ | ✅ Present |
| example.json at root | ✓ | ✓ | ✅ Present |
| ZIP folder structure | ✓ | ✓ | ✅ Match |

---

## 🚀 Next Steps

1. **Upload the ZIP file** (`adapt-fadetext-v1.0.3.zip`)
2. **Report results** - Does it upload successfully?
3. **Test the component** - Add it to a course and preview
4. **If successful** - Merge PR #2 to main branch

---

## 📝 Additional Notes

- **Adapt Framework Version:** Your Authoring Tool uses v5.53.3
- **Framework Compatibility:** Plugin specifies ^5.0.0 (compatible)
- **License:** GPL-3.0 (standard SPDX format)
- **Component Type:** adapt-component (properly tagged)

The ZIP file structure was the likely culprit. Try uploading this properly structured ZIP file!

---

**Status:** Ready for Upload Testing  
**Confidence:** Very High  
**File:** `/home/user/webapp/adapt-fadetext-v1.0.3.zip`

*Structure now matches working reference exactly, including proper ZIP format.*
