import { useRef, useState } from 'react'
import { useReactToPrint } from 'react-to-print'
import { MarkdownEditor, MarkdownViewer } from 'react-github-markdown'

const Home = () => {
    const [text, setText] = useState('')
    const viewerRef = useRef<HTMLDivElement | null>(null)
    const reactToPrintFn = useReactToPrint({ contentRef: viewerRef })

    return (
        <div className={`p-10`}>
            <div className='text-right'>
                <button
                    onClick={() => {
                        reactToPrintFn()
                    }}
                    className='transform rounded bg-blue-500 px-4 py-2 text-white transition duration-100 ease-in-out hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300'
                >
                    Print PDF
                </button>
            </div>

            <div className='flex h-screen'>
                <div className='h-full w-full'>
                    <MarkdownEditor
                        monospace={true}
                        minLines={45}
                        value={text}
                        onChange={setText}
                        isDarkTheme={false}
                    />
                </div>

                <div className={`h-full w-full overflow-y-auto px-4`} ref={viewerRef}>
                    <MarkdownViewer value={text} isDarkTheme={false} />
                </div>
            </div>
        </div>
    )
}

export default Home
