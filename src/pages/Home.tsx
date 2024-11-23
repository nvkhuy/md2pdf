import { useState } from 'react'
import { useReactToPrint } from 'react-to-print'
import { useRef } from 'react'
import 'github-markdown-css/github-markdown-light.css'
import defaultText from '../contants/defaultmd.ts'
import CustomMarkdown from '../components/CustomMarkdown.tsx'

const Home = () => {
    const [text, setText] = useState(defaultText)
    const viewerRef = useRef<HTMLDivElement | null>(null)
    const reactToPrintFn = useReactToPrint({ contentRef: viewerRef })

    return (
        <div className='flex h-screen flex-col overflow-hidden bg-gray-200'>
            {/* Header */}
            <div className='p-2 text-right'>
                <button
                    onClick={() => {
                        reactToPrintFn()
                    }}
                    className='transform rounded bg-blue-500 px-4 py-2 text-white transition duration-100 ease-in-out hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300'
                >
                    Print PDF
                </button>
            </div>

            <div className='flex h-screen overflow-hidden'>
                {/* Editor Section */}
                <div className='w-1/2'>
                    <textarea
                        className='h-full w-full flex-shrink-0 overflow-auto bg-gray-700 px-4 text-gray-300'
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                </div>

                {/* Markdown Viewer Section */}
                <div className='w-1/2'>
                    <div className='markdown-body h-full overflow-auto px-4' ref={viewerRef}>
                        <CustomMarkdown text={text}></CustomMarkdown>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
