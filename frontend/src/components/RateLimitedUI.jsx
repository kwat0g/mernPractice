
const RateLimitedUI = () => {
  return (
    <div>
        <div className="max-w-6xl mx-auto px-4 py-8">
            <div className="bg-primary/10 border-primary/30 rounded-lg shadow-md border p-4 mb-4">
                <h2 className="text-2xl font-semibold mb-2 text-primary">Rate Limit Exceeded</h2>
                <p className="text-primary/90">You have exceeded the maximum number of requests allowed. Please wait a moment before trying again.</p>
            </div>
        </div>
    </div>
  )
}

export default RateLimitedUI
