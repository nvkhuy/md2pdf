const defaultText = `
# Hello
Here’s some long Markdown content with various elements (headers, lists, code blocks, images, tables, etc.) that you can use to test your Markdown render feature:

\`\`\`md
# Welcome to Markdown Renderer!

Markdown is a lightweight markup language that you can use to add formatting elements to plaintext text documents. It's commonly used for README files, for writing messages in online discussion forums, and to create rich text using a plain text editor.

## Basic Syntax

Here’s an example of some basic Markdown syntax:

### Headers

# This is an H1
## This is an H2
### This is an H3

### Emphasis

*This text will be italic*  
**This text will be bold**  
_You **can** combine them_

### Lists

#### Unordered list:

- Item 1
- Item 2
  - Nested Item 2a
  - Nested Item 2b

#### Ordered list:

1. First item
2. Second item
3. Third item

### Links

You can create [inline links](https://example.com) like this, or [reference links][1] using square brackets.

[1]: https://example.com "Reference Link"

### Images

![Sample Image](https://via.placeholder.com/150 "Sample Placeholder")

### Blockquotes

> This is a blockquote.  
> Blockquotes are used to highlight quotes or important text.

### Code Blocks

#### Inline code
You can add inline code like this: \`console.log('Hello, world!')\`.

#### Code Block
\`\`\`javascript
function greet(name) {
    console.log(\`Hello, ${name}!\`);
}

greet('World');
\`\`\`

### Horizontal Rule

---

## Advanced Syntax

### Tables

| Syntax      | Description |
| ----------- | ----------- |
| Header      | Title       |
| Paragraph   | Text        |

### Task Lists

- [x] Task 1
- [x] Task 2 (completed)
- [ ] Task 3 (incomplete)

### Footnotes

Here’s a simple footnote[^1].

[^1]: This is the footnote.

### Strikethrough

~~This text will be crossed out.~~

## Extended Markdown (GFM)

GitHub Flavored Markdown (GFM) supports additional features, such as:

### Tables

| Feature     | Description |
| ----------- | ----------- |
| **GFM Tables** | Support for tables like this one. |
| **Strikethrough** | ~~Strikethrough text~~ is supported. |

### Syntax Highlighting for Code Blocks

\`\`\`python
def greet(name):
    print(f"Hello, {name}")

greet("World")
\`\`\`

## Conclusion

Markdown is a powerful tool for creating rich text using simple syntax. You can use it for documentation, notes, or even web content. It's easy to learn and widely supported!
\`\`\`

### Key Features of the Markdown:

1. **Headers** (H1, H2, H3, etc.)
2. **Text Formatting** (Bold, Italic, Bold+Italic)
3. **Lists** (Ordered and Unordered)
4. **Links** (Inline and Reference-style)
5. **Images** (with Alt Text)
6. **Blockquotes**
7. **Inline Code** and **Code Blocks** (with syntax highlighting)
8. **Tables**
9. **Task Lists**
10. **Footnotes**
11. **Strikethrough**
12. **Horizontal Rule**

You can copy this Markdown into your app to check how your renderer handles various types of content. Let me know how it works!
`
export default defaultText
