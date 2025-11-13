# How to Package Plugin for Upload

## ⚠️ The Problem

When you download from GitHub using "Download ZIP", it includes:
- ❌ All `.md` documentation files
- ❌ The long folder name: `adapt-quote-fix-add-schema-directory/`
- ❌ Extra files like `.gitignore`, `package-lock.json`

**Result:** Too much clutter, and the Authoring Tool may have issues.

## ✅ The Solution

Create a **clean ZIP** with ONLY the plugin files needed by Adapt.

### Required Plugin Files:
```
adapt-fadetext/
├── bower.json                    ← Plugin metadata
├── package.json                  ← npm metadata  
├── properties.schema             ← Authoring Tool schema
├── example.json                  ← Example config (root)
├── js/
│   └── adapt-fadetext.js        ← Main component
├── less/
│   └── fadetext.less            ← Styles
├── templates/
│   └── fadetext.hbs             ← Handlebars template
├── schema/
│   └── component.schema.json    ← Framework v5+ schema
└── example/
    ├── demo.html
    └── example.json
```

---

## 📦 Method 1: Download Pre-Made Clean ZIP

I've created a clean ZIP file for you:

**Location:** `/home/user/webapp/adapt-fadetext-v1.0.5-clean.zip`

**Contents:** Only the essential plugin files (no .md files)

**Upload this file** to the Adapt Authoring Tool.

---

## 📦 Method 2: Create Clean ZIP from Repository

If you need to create it yourself:

### From Linux/Mac:
```bash
# Clone the repository
git clone https://github.com/fosterc1/adapt-quote.git
cd adapt-quote
git checkout fix/add-schema-directory

# Create clean folder
mkdir ../adapt-fadetext
cp -r bower.json package.json properties.schema example.json \
      js less templates schema example ../adapt-fadetext/

# Create ZIP
cd ..
zip -r adapt-fadetext.zip adapt-fadetext/

# Upload adapt-fadetext.zip
```

### From Windows:
```powershell
# Clone the repository
git clone https://github.com/fosterc1/adapt-quote.git
cd adapt-quote
git checkout fix/add-schema-directory

# Create clean folder
New-Item -ItemType Directory -Path ..\adapt-fadetext
Copy-Item bower.json, package.json, properties.schema, example.json `
          -Destination ..\adapt-fadetext\
Copy-Item -Recurse js, less, templates, schema, example `
          -Destination ..\adapt-fadetext\

# Create ZIP (right-click folder → Send to → Compressed folder)
# Or use: Compress-Archive -Path ..\adapt-fadetext -DestinationPath ..\adapt-fadetext.zip
```

---

## 📦 Method 3: Use GitHub Release (Recommended for Future)

For future versions, create a GitHub Release:

1. Go to repository → Releases → "Create a new release"
2. Tag version: `v1.0.5`
3. Upload the clean ZIP as a release asset
4. Users download from Releases page (cleaner than branch download)

---

## 🔍 Verify ZIP Structure

Before uploading, verify the ZIP structure:

```bash
unzip -l adapt-fadetext.zip | head -20
```

**Should show:**
```
adapt-fadetext/
adapt-fadetext/bower.json
adapt-fadetext/package.json
adapt-fadetext/properties.schema
...
```

**Should NOT show:**
- ❌ `.md` files
- ❌ Multiple nested folders
- ❌ `.git` folder
- ❌ `package-lock.json`
- ❌ `.gitignore`

---

## 📋 Checklist Before Upload

- [ ] ZIP contains folder named `adapt-fadetext/` (or similar short name)
- [ ] `bower.json` is directly in that folder
- [ ] `properties.schema` is directly in that folder
- [ ] No `.md` documentation files included
- [ ] No `.git` folder included
- [ ] File size is small (~13-15KB, not 60KB+)
- [ ] All required folders present: js/, less/, templates/, schema/, example/

---

## 🎯 Expected Upload Behavior

### With Clean ZIP:
1. ✅ Upload succeeds
2. ✅ No "cannot find bower.json" error
3. ✅ Plugin appears in component library

### With GitHub Download ZIP:
1. ❌ "Cannot find bower.json" error
2. ❌ Too many files/wrong structure
3. ❌ Upload fails

---

## 📊 File Size Comparison

| Type | Size | Includes |
|------|------|----------|
| GitHub Download ZIP | ~70KB | All .md files, full repo |
| Clean Plugin ZIP | ~13KB | Only plugin files |

**Use the clean ZIP for uploading!**

---

## 🚀 Upload Now

**File to upload:** `/home/user/webapp/adapt-fadetext-v1.0.5-clean.zip`

1. Download this file
2. Log into Adapt Authoring Tool as Super Admin
3. Go to Plugin Management
4. Click "Upload Plugin"
5. Select `adapt-fadetext-v1.0.5-clean.zip`
6. Upload

---

## 💡 For Future Versions

When you update the plugin:

1. Make changes in the repository
2. Increment version in `bower.json` and `package.json`
3. Commit and push
4. Create a clean ZIP (Method 1, 2, or 3 above)
5. Test upload to Authoring Tool
6. Once confirmed working, create GitHub Release with clean ZIP

**Don't rely on GitHub's automatic "Download ZIP"** - it includes too many files!

---

**Status:** Clean ZIP ready at `/home/user/webapp/adapt-fadetext-v1.0.5-clean.zip`  
**Size:** 13KB  
**Contents:** Plugin files only (no documentation)  
**Ready:** For upload to Adapt Authoring Tool ✅
