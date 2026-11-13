import { Copy, Check } from 'lucide-react'
import { useState } from 'react'

export function CopyField({ value }: { value: string }) {
    const [copied, setCopied] = useState(false)

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(value)
            setCopied(true)

            setTimeout(() => setCopied(false), 2000)
        } catch (error) {
            console.error('Failed to copy:', error)
        }
    }

    return (
        <div className="flex items-center border border-gray-100 rounded-lg overflow-hidden bg-[#fbf8fc]">
            <input
                type="text"
                value={value}
                readOnly
                className="flex-1 min-w-0 px-3 py-3 outline-none bg-transparent text-sm text-[#D95D28]"
            />

            <button
                type="button"
                onClick={handleCopy}
                className="flex items-center gap-2 px-3 py-2 text-sm font-semibold text-[#D95D28] hover:bg-orange-50 border-l border-gray-200"
            >
                {copied ? <Check size={16} /> : <Copy size={16} />}
                {copied ? 'Copied!' : 'Copy'}
            </button>
        </div>
    )
}