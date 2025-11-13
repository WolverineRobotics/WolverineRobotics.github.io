# Blog System Guide

This directory contains all blog posts for the Wolverine Robotics website.

## Quick Start: Adding a New Blog Post

### Step 1: Create Blog Directory Structure

Each blog post must be in its own directory with the following structure:

```bash
_blogs/your-blog-title/
├── blog.md                    # Your blog content
└── assets/
    └── thumbnail.png          # Required thumbnail image (800x600 recommended)
```

**Create the structure:**
```bash
mkdir -p _blogs/your-blog-title/assets
touch _blogs/your-blog-title/blog.md
```

**Naming convention**: Use lowercase with hyphens (e.g., `my-awesome-robot-build`)

### Step 2: Add Thumbnail Image

**IMPORTANT**: Place a `thumbnail.jpg` file in the `assets/` folder. This image will be:
- Displayed as a card thumbnail on the blog index page
- Used as a hero banner on the blog post page (350px height, limited to 50% viewport height)

**Recommended specs:**
- Filename: `thumbnail.jpg` (exactly - required)
- Dimensions: 800x600 pixels (or 4:3 aspect ratio recommended)
- Format: JPG, PNG, or SVG
- Size: Under 500KB for faster loading

**Pro Tip:** During development, you can duplicate `thumbnail.jpg` to create placeholder images:
```bash
# Create placeholder images for your blog
cp _blogs/your-blog-title/assets/thumbnail.jpg _blogs/your-blog-title/assets/placeholder-image.jpg
```
Then replace them with real images later!

### Step 3: Add Front Matter

At the top of your blog file, add the following front matter:

```yaml
---
layout: blog-post
title: "Your Blog Post Title"
subtitle: "A short subtitle describing the post"
date: 2025-11-12
author: "Your Name"
excerpt: "A brief summary of the blog post that appears on the blog index page."
---
```

**Required fields**:
- `layout`: Must be `blog-post`
- `title`: The main title of your blog post
- `date`: Publication date in YYYY-MM-DD format

**Optional fields**:
- `subtitle`: Appears below the title on the blog post page
- `author`: Name of the author
- `excerpt`: Summary text shown on the blog index page

### Step 4: Write Your Content

After the front matter in `blog.md`, write your blog content using Markdown:

```markdown
## Your First Section

Write your content here using **Markdown** formatting.

### Subsection

- Bullet points
- Are easy to create

1. Numbered lists
2. Work too

### Code Examples

You can include code blocks:

\```java
public void autonomousInit() {
    robot.resetSensors();
}
\```
```

### Step 5: Add Additional Images (Optional)

You can add more images beyond the thumbnail:

1. **Add your images** to the assets folder:
   ```bash
   _blogs/your-blog-title/assets/image1.jpg
   _blogs/your-blog-title/assets/robot-photo.png
   ```

2. **Reference images** in your blog post:
   ```markdown
   ![Image Description]({{ '/blog/your-blog-title/assets/image1.jpg' | relative_url }})
   ```

**Quick Tip for Development:**
If you don't have all your images ready yet, duplicate `thumbnail.jpg`:
```bash
cp _blogs/your-blog-title/assets/thumbnail.jpg _blogs/your-blog-title/assets/temp-image.jpg
```
This lets you preview your blog layout while you gather real photos!

## Blog Post Structure

### Recommended Structure

```markdown
---
layout: blog-post
title: "Your Title"
date: 2025-11-12
author: "Your Name"
excerpt: "Brief summary"
---

## Introduction

Start with an engaging introduction.

## Main Content

### Section 1
Content here...

### Section 2
More content...

## Conclusion

Wrap up your post.

---

*Additional notes or credits*
```

## Markdown Formatting Guide

### Headers
```markdown
## Level 2 Header
### Level 3 Header
#### Level 4 Header
```

### Text Formatting
```markdown
**Bold text**
*Italic text*
***Bold and italic***
`Inline code`
```

### Links
```markdown
[Link Text](https://example.com)
[Internal Link]({{ '/blog/' | relative_url }})
```

### Images
```markdown
![Alt text]({{ '/blog-name/assets/image.jpg' | relative_url }})
```

### Lists
```markdown
- Unordered
- List
- Items

1. Ordered
2. List
3. Items
```

### Code Blocks
````markdown
```language
code here
```
````

Supported languages: `java`, `python`, `javascript`, `bash`, `cpp`, etc.

### Blockquotes
```markdown
> This is a quote
> It can span multiple lines
```

### Tables
```markdown
| Header 1 | Header 2 |
|----------|----------|
| Cell 1   | Cell 2   |
| Cell 3   | Cell 4   |
```

### Horizontal Rule
```markdown
---
```

## Examples

See the existing blog posts for examples:
- `my-first-blog.md` - Basic blog post structure
- `competition-recap-2024.md` - Blog with code examples and sections

## Testing Your Blog Post

After creating your blog post:

1. **Build the site**:
   ```bash
   bundle exec jekyll build
   ```

2. **Serve locally** (optional):
   ```bash
   bundle exec jekyll serve
   ```
   Then visit `http://localhost:4000/blog/` in your browser

3. **Check for errors** in the build output

## Tips for Great Blog Posts

1. **Use descriptive titles** - Make it clear what the post is about
2. **Write engaging excerpts** - This appears on the blog index, make it compelling
3. **Break up long content** - Use headers to organize your content
4. **Include visuals** - Images make posts more engaging
5. **Add code examples** - Technical posts benefit from code snippets
6. **Proofread** - Check for spelling and grammar errors
7. **Link to related content** - Connect to other pages or resources
8. **Update dates** - Use the actual publication date

## Complete Blog Workflow

### Standard Workflow (With Thumbnail)

```bash
# 1. Create the folder structure
mkdir -p _blogs/my-new-post/assets

# 2. Create the blog file
touch _blogs/my-new-post/blog.md

# 3. Add thumbnail image (REQUIRED)
cp ~/Desktop/my-thumbnail.jpg _blogs/my-new-post/assets/thumbnail.jpg

# 4. (Optional) Add additional images
cp ~/Desktop/robot-photo.jpg _blogs/my-new-post/assets/

# 5. Edit blog.md and add your content
# (Use your favorite text editor)

# 6. Build and test
bundle exec jekyll build
```

### Example Complete Blog Structure

```
_blogs/
└── competition-recap-2024/
    ├── blog.md                          # Main blog content
    └── assets/
        ├── thumbnail.jpg                # Required thumbnail (shows on index & banner)
        ├── robot-field.jpg              # Additional images
        └── pit-crew.jpg                 # More images
```

## Troubleshooting

### Blog post not showing up?
- Check that the date is not in the future
- Verify the front matter is correctly formatted
- Ensure the file is in the `_blogs` directory
- Check for YAML syntax errors in the front matter

### Images not displaying?
- Verify the image path is correct
- Make sure you're using the `relative_url` filter
- Check that the image file exists in the assets folder
- Try rebuilding the site

### Build errors?
- Check YAML front matter syntax (proper indentation, quotes)
- Look for unclosed code blocks
- Verify all liquid tags are properly formatted

## Questions?

If you have questions about adding blog posts, contact the webmaster or check the Jekyll documentation at https://jekyllrb.com/docs/
