import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import 'katex/dist/katex.min.css'

type CustomMarkdownProps = {
    text: string
}

const CustomMarkdown = ({ text }: CustomMarkdownProps) => {
    return (
        <div className=''>
            <ReactMarkdown
                className='not-apply-tailwind'
                remarkPlugins={[remarkGfm, remarkMath]}
                rehypePlugins={[rehypeKatex as unknown as never]}
                children={text}
            />
        </div>
    )
}

export default CustomMarkdown
