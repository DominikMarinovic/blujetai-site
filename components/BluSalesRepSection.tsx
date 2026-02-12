const pillClassName =
  "inline-flex items-center drop-shadow-sm text-transparent bg-clip-text bg-gradient-to-b from-foreground to-accent justify-center text-[0.95em] font-medium sm:leading-[1.2] "

export default function BluSalesRepSection() {
  return (
    <section className=" bg-white">
      <div className=" flex min-h-[40vh] flex-col items-center justify-center py-24 sm:min-h-[50vh] sm:py-30 lg:py-36">
        <div className="sm:mx-auto mx-0 sm:max-w-3xl text-center">
          <p className="font-medium  text-[22px] leading-tight text-stone-700 sm:text-4xl sm:leading-[1.2]">
            <span className="block mb-2">We build you the </span>
            <span className="bg-foreground text-stone-100 font-semibold py-1 rounded-md px-2">
              1-On-1 Conversation Engine!
            </span>
            <span className="block mt-8">It's like having a salesperson</span>
            <span className="block">who learns about and reaches out</span>
            <span className="block">with custom 1-to-1 message to</span>
            <span className="block">
              <span className={pillClassName}>every visitor and subscriber</span>
            </span>
          </p>

          {/*<p className="sm:mx-auto mx-0 font-normal pt-12 font-serif text-[26px] leading-snug text-stone-900 sm:text-4xl sm:leading-[1.2]">
            <span className="block">We build you an AI team to</span>
            <span className="block">convert visitors and </span>
            <span className="block"><span className={pillClassName}> save subscribers with </span></span>
            <span className="block"><span className={pillClassName}> personalized 1-to-1 </span> conversations
            </span>
          </p>*/}
        </div>
      </div>
    </section>
  )
}
