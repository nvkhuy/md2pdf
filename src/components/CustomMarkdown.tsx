import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { materialOceanic } from 'react-syntax-highlighter/dist/esm/styles/prism' // Syntax highlighter theme
import 'katex/dist/katex.min.css'

type CustomMarkdownProps = {
    text: string
}

const CustomMarkdown = ({ text }: CustomMarkdownProps) => {
    return (
        <div className='custom-markdown'>
            <ReactMarkdown
                className='not-apply-tailwind'
                remarkPlugins={[remarkGfm, remarkMath]}
                rehypePlugins={[rehypeKatex as unknown as never]}
                components={{
                    code(props) {
                        const { children, className, ...rest } = props
                        const match = /language-(\w+)/.exec(className || '')
                        return match ? (
                            <SyntaxHighlighter
                                PreTag='div'
                                children={String(children).replace(/\n$/, '')}
                                language={match[1]}
                                style={materialOceanic}
                            />
                        ) : (
                            <code {...rest} className={className}>
                                {children}
                            </code>
                        )
                    }
                }}
                children={text}
            />
        </div>
    )
}

export default CustomMarkdown
