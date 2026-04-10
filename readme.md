# 📝 Trombay Trading Blog – Admin README

This document explains how to manage and write blog posts for the Trombay Trading website.

---

## 📁 Blog Location

All blog posts are stored as markdown files inside:

```
ttBlog/blogposts/
```

Each file represents one blog.

---

## ✍️ How to Write a Blog Post

When creating a new blog, you must follow the exact markdown structure shown below.

### 📄 Blog File Format

Copy and use this template:

```md
---
title: "Your Blog Title"
subtitle: "Short supporting line"
date: "YYYY-MM-DD"
readTime: "X min read"
excerpt: "Short summary of the blog"
coverImage: "IMAGE_URL"
---

# Main Heading

Your blog content starts here...
```

---

## ⚠️ Important Guidelines

- Do not change the field names (`title`, `date`, etc.)
- Always include the `---` lines at the top and bottom
- Ensure the date format is correct (`YYYY-MM-DD`)
- Provide a valid image URL in `coverImage`
- Keep the excerpt short and meaningful

---

## 🚀 Publishing

1. Create a new `.md` file inside `blogposts`
2. Add content using the template above
3. Save and push the file  
4. The blog will automatically appear on the website