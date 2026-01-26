export default function PixelPlansButton() {
  return (
    <div className="pixel-plans mt-20">
      <div className="btn-wrapper">
        <a className="btn" href="#pilot-widget" aria-label="See Plans">
          <div className="btn-icon">
            {Array.from({ length: 49 }).map((_, index) => (
              <div key={index} className="pixel" />
            ))}
          </div>

          <div className="btn-text" aria-hidden="true">
            <span className="btn-letter">B</span>
            <span className="btn-letter">o</span>
            <span className="btn-letter">o</span>
            <span className="btn-letter">k</span>
            <span className="btn-letter">&nbsp;</span>
            <span className="btn-letter">s</span>
            <span className="btn-letter">&nbsp;</span>
            <span className="btn-letter">D</span>
            <span className="btn-letter">e</span>
            <span className="btn-letter">m</span>
            <span className="btn-letter">o</span>
          </div>
        </a>

        <svg
          id="corner-1"
          width="29"
          height="29"
          viewBox="0 0 29 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_117_21310)">
            <path
              className="line"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.4381 1L0 1V0L11.4381 1.78814e-07C12.6316 -2.98023e-07 13.7762 0.474106 14.6201 1.31802L27.1577 13.8555C28.0016 14.6995 28.4757 15.8441 28.4757 17.0375V28.4757H27.4757V17.0375C27.4757 16.1093 27.1069 15.219 26.4505 14.5627L13.913 2.02513C13.2566 1.36875 12.3664 1 11.4381 1Z"
            ></path>
          </g>
          <defs>
            <clipPath id="clip0_117_21310">
              <rect width="29" height="29" fill="white"></rect>
            </clipPath>
          </defs>
        </svg>

        <svg
          id="corner-2"
          width="29"
          height="29"
          viewBox="0 0 29 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_117_21310)">
            <path
              className="line"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.4381 1L0 1V0L11.4381 1.78814e-07C12.6316 -2.98023e-07 13.7762 0.474106 14.6201 1.31802L27.1577 13.8555C28.0016 14.6995 28.4757 15.8441 28.4757 17.0375V28.4757H27.4757V17.0375C27.4757 16.1093 27.1069 15.219 26.4505 14.5627L13.913 2.02513C13.2566 1.36875 12.3664 1 11.4381 1Z"
            ></path>
          </g>
          <defs>
            <clipPath id="clip0_117_21310">
              <rect width="29" height="29" fill="white"></rect>
            </clipPath>
          </defs>
        </svg>

        <svg
          id="corner-3"
          width="29"
          height="29"
          viewBox="0 0 29 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_117_21310)">
            <path
              className="line"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.4381 1L0 1V0L11.4381 1.78814e-07C12.6316 -2.98023e-07 13.7762 0.474106 14.6201 1.31802L27.1577 13.8555C28.0016 14.6995 28.4757 15.8441 28.4757 17.0375V28.4757H27.4757V17.0375C27.4757 16.1093 27.1069 15.219 26.4505 14.5627L13.913 2.02513C13.2566 1.36875 12.3664 1 11.4381 1Z"
            ></path>
          </g>
          <defs>
            <clipPath id="clip0_117_21310">
              <rect width="29" height="29" fill="white"></rect>
            </clipPath>
          </defs>
        </svg>

        <svg
          id="corner-4"
          width="29"
          height="29"
          viewBox="0 0 29 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_117_21310)">
            <path
              className="line"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.4381 1L0 1V0L11.4381 1.78814e-07C12.6316 -2.98023e-07 13.7762 0.474106 14.6201 1.31802L27.1577 13.8555C28.0016 14.6995 28.4757 15.8441 28.4757 17.0375V28.4757H27.4757V17.0375C27.4757 16.1093 27.1069 15.219 26.4505 14.5627L13.913 2.02513C13.2566 1.36875 12.3664 1 11.4381 1Z"
            ></path>
          </g>
          <defs>
            <clipPath id="clip0_117_21310">
              <rect width="29" height="29" fill="white"></rect>
            </clipPath>
          </defs>
        </svg>

        <div className="card" aria-hidden="true">
          <div className="card-header">
            <span>Let's Scale</span>
          </div>
          <div className="card-body">
            <p>Fuck yees</p>
          </div>
        </div>
      </div>
    </div>
  )
}
