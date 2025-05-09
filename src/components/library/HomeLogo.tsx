import Link from 'next/link';

interface HomeLogoProps {
  size?: number;
}

const HomeLogo: React.FC<HomeLogoProps> = ({ size = 100 }) => (
  <div className="max-w-[150px] sm:max-w-none">
    <div className="flex-shrink-0">
      <Link href="/">
        <div className="group transition-all duration-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-9.415 0 315.45 315.45"
            width={size}
            height={size}
            role="img"
            aria-label="Jackson Ruckar Logo"
            className="object-contain transition-all duration-500"
          >
            <g className="isolate">
              <g id="Layer_1">
                <g>
                  <path
                    d="M296.62,108.15L134.39,0,63.49,47.27v38.34l54.95-36.63V255.83L0,176.87v38.34l150.34,100.23v-88.43l131.6,87.73v-38.34l-118.85-79.23,133.53-89.02ZM150.34,48.98l88.76,59.17-88.76,59.18V48.98Z"
                    className="fill-gray-100 group-hover:fill-gray-300 transition-colors duration-500"
                  />
                  <polygon
                    points="134.39 216.61 150.32 254.86 150.34 227.01 134.39 216.61"
                    className="fill-gray-400 mix-blend-multiply"
                  />
                  <polyline
                    points="150.34 48.98 134.39 38.34 150.44 71.34"
                    className="fill-gray-400 mix-blend-multiply"
                  />
                </g>
              </g>
            </g>
          </svg>
        </div>
      </Link>
    </div>
  </div>
);

export default HomeLogo;
