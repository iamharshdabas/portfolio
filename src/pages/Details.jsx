import { Copy } from "lucide-react"
import { detailsData } from "../config/constants"

const Details = () => {
  const handleCopy = (value) => {
    navigator.clipboard.writeText(value)
  }

  return (
    <div className="mx-auto max-w-4xl p-8">
      <h1 className="mb-8 text-center font-bold text-4xl">Job Application Details</h1>
      <div className="space-y-4">
        {detailsData.map((detail, index) => (
          <div className="flex items-center justify-between rounded-2xl border border-dark pl-4" key={detail.label}>
            <div>
              <p className="font-semibold text-lg">{detail.label}</p>
              <p className="whitespace-pre-wrap text-dark">{detail.value}</p>
            </div>
            <button
              className="rounded-2xl bg-light p-8 text-dark"
              onClick={() => handleCopy(detail.value, index)}
              type="button"
            >
              <Copy className="size-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Details
