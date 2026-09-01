const svg = `<svg viewBox="0 0 640 420" role="img" aria-hidden="true">
          <defs>
            <filter id="mnShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="8" stdDeviation="14" flood-color="#292420" flood-opacity="0.10"/>
            </filter>
            <clipPath id="mnClip">
              <path d="M372.8,195.0 L371.8,196.5 L368.2,195.6 L368.1,234.0 L349.5,245.7 L346.0,254.3 L342.2,257.3 L341.5,266.6 L348.6,269.5 L351.4,278.5 L347.1,285.9 L345.6,299.0 L347.5,308.2 L345.2,320.8 L356.6,331.8 L366.1,333.2 L370.8,340.3 L383.0,345.8 L385.1,348.3 L387.0,356.3 L393.9,360.9 L399.8,367.3 L407.0,369.6 L413.7,379.4 L414.4,394.5 L416.7,402.0 L180.6,402.0 L180.6,284.7 L177.5,279.6 L169.8,276.9 L162.4,264.6 L163.4,261.7 L170.7,256.3 L174.7,250.6 L176.0,233.3 L174.1,218.5 L168.5,210.2 L165.7,197.7 L164.9,185.8 L166.4,179.8 L163.9,175.5 L162.7,134.6 L154.9,116.6 L149.3,97.2 L150.7,87.2 L149.4,82.4 L150.2,74.4 L148.6,72.9 L151.8,63.8 L145.4,43.2 L239.2,43.2 L239.2,18.0 L243.5,20.0 L248.0,18.9 L254.0,22.9 L257.4,36.6 L257.4,43.1 L258.8,43.1 L260.4,50.7 L260.1,57.6 L267.2,62.6 L277.3,62.0 L281.1,66.0 L298.4,67.3 L300.5,74.7 L315.2,72.7 L315.4,69.7 L324.8,66.4 L337.2,67.6 L348.6,73.2 L352.8,72.9 L353.1,75.5 L349.9,76.0 L349.3,78.1 L351.8,79.8 L358.5,79.1 L360.8,81.3 L364.1,92.5 L366.7,92.9 L367.7,87.3 L369.6,85.2 L378.9,84.9 L382.4,92.3 L394.2,95.4 L394.4,100.9 L404.5,103.9 L414.5,103.2 L431.6,92.3 L433.7,92.7 L437.7,102.4 L465.4,101.0 L470.5,102.8 L471.9,106.5 L476.2,109.2 L482.2,106.8 L494.6,107.4 L490.9,110.5 L488.5,109.4 L487.8,111.4 L472.7,119.4 L451.8,125.9 L438.4,132.9 L424.4,143.8 L405.0,165.4 L377.5,187.0 L380.7,192.8 L376.1,190.0 L372.9,192.0 Z"/>
            </clipPath>
          </defs>
          <!-- Minnesota -->
          <path d="M372.8,195.0 L371.8,196.5 L368.2,195.6 L368.1,234.0 L349.5,245.7 L346.0,254.3 L342.2,257.3 L341.5,266.6 L348.6,269.5 L351.4,278.5 L347.1,285.9 L345.6,299.0 L347.5,308.2 L345.2,320.8 L356.6,331.8 L366.1,333.2 L370.8,340.3 L383.0,345.8 L385.1,348.3 L387.0,356.3 L393.9,360.9 L399.8,367.3 L407.0,369.6 L413.7,379.4 L414.4,394.5 L416.7,402.0 L180.6,402.0 L180.6,284.7 L177.5,279.6 L169.8,276.9 L162.4,264.6 L163.4,261.7 L170.7,256.3 L174.7,250.6 L176.0,233.3 L174.1,218.5 L168.5,210.2 L165.7,197.7 L164.9,185.8 L166.4,179.8 L163.9,175.5 L162.7,134.6 L154.9,116.6 L149.3,97.2 L150.7,87.2 L149.4,82.4 L150.2,74.4 L148.6,72.9 L151.8,63.8 L145.4,43.2 L239.2,43.2 L239.2,18.0 L243.5,20.0 L248.0,18.9 L254.0,22.9 L257.4,36.6 L257.4,43.1 L258.8,43.1 L260.4,50.7 L260.1,57.6 L267.2,62.6 L277.3,62.0 L281.1,66.0 L298.4,67.3 L300.5,74.7 L315.2,72.7 L315.4,69.7 L324.8,66.4 L337.2,67.6 L348.6,73.2 L352.8,72.9 L353.1,75.5 L349.9,76.0 L349.3,78.1 L351.8,79.8 L358.5,79.1 L360.8,81.3 L364.1,92.5 L366.7,92.9 L367.7,87.3 L369.6,85.2 L378.9,84.9 L382.4,92.3 L394.2,95.4 L394.4,100.9 L404.5,103.9 L414.5,103.2 L431.6,92.3 L433.7,92.7 L437.7,102.4 L465.4,101.0 L470.5,102.8 L471.9,106.5 L476.2,109.2 L482.2,106.8 L494.6,107.4 L490.9,110.5 L488.5,109.4 L487.8,111.4 L472.7,119.4 L451.8,125.9 L438.4,132.9 L424.4,143.8 L405.0,165.4 L377.5,187.0 L380.7,192.8 L376.1,190.0 L372.9,192.0 Z"
                fill="#F8F6F0" stroke="rgba(110,103,96,.6)" stroke-width="1.5" stroke-linejoin="round" filter="url(#mnShadow)"/>
          <!-- 100-mile disc, clipped to the state -->
          <g clip-path="url(#mnClip)">
            <circle cx="322.7" cy="315" r="94.6" fill="rgba(54,79,54,.12)" stroke="rgba(54,79,54,.35)" stroke-width="1" stroke-dasharray="2 5"/>
          </g>
          <text x="323" y="210" text-anchor="middle" font-family="Inconsolata,monospace" font-size="10.5" font-weight="600" letter-spacing="1.4" fill="#364F36">≈ 100 MILE RADIUS</text>
          <!-- routes to unnamed homes all over the service area -->
          <path d="M322.7,315 Q334,295 340,275" fill="none" stroke="rgba(110,103,96,.4)" stroke-width="1.2" stroke-dasharray="3 6" stroke-linecap="round"/>
          <path d="M322.7,315 Q282,308 243,310" fill="none" stroke="rgba(110,103,96,.4)" stroke-width="1.2" stroke-dasharray="3 6" stroke-linecap="round"/>
          <path d="M322.7,315 Q283,340 250,362" fill="none" stroke="rgba(110,103,96,.4)" stroke-width="1.2" stroke-dasharray="3 6" stroke-linecap="round"/>
          <path d="M322.7,315 Q351,332 374,355" fill="none" stroke="rgba(110,103,96,.4)" stroke-width="1.2" stroke-dasharray="3 6" stroke-linecap="round"/>
          <path d="M322.7,315 Q329,275 333,240" fill="none" stroke="rgba(110,103,96,.4)" stroke-width="1.2" stroke-dasharray="3 6" stroke-linecap="round"/>
          <path d="M322.7,315 Q287,291 255,270" fill="none" stroke="rgba(110,103,96,.4)" stroke-width="1.2" stroke-dasharray="3 6" stroke-linecap="round"/>
          <!-- unnamed client homes at route ends -->
          <g stroke="rgba(110,103,96,.8)" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <g transform="translate(333.5,268.5) scale(0.55)"><path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/></g>
            <g transform="translate(236.5,303.5) scale(0.55)"><path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/></g>
            <g transform="translate(243.5,355.5) scale(0.55)"><path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/></g>
            <g transform="translate(367.5,348.5) scale(0.55)"><path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/></g>
            <g transform="translate(326.5,233.5) scale(0.55)"><path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/></g>
            <g transform="translate(248.5,263.5) scale(0.55)"><path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/></g>
          </g>
          <!-- reference cities -->
          <g fill="#F0EEE6" stroke="#364F36" stroke-width="1.5">
            <circle cx="283.9" cy="268.1" r="3"/>
            <circle cx="243.6" cy="296.2" r="3"/>
            <circle cx="291.2" cy="358.7" r="3"/>
            <circle cx="359.8" cy="368" r="3"/>
          </g>
          <circle cx="376.6" cy="187.6" r="3" fill="#F0EEE6" stroke="rgba(110,103,96,.8)" stroke-width="1.5"/>
          <g font-family="Inconsolata,monospace" font-size="9.5" font-weight="600" letter-spacing=".9" fill="#6E6760">
            <text x="284" y="257" text-anchor="middle">ST. CLOUD</text>
            <text x="233" y="300" text-anchor="end">WILLMAR</text>
            <text x="291" y="375" text-anchor="middle">MANKATO</text>
            <text x="360" y="384" text-anchor="middle">ROCHESTER</text>
            <text x="377" y="177" text-anchor="middle" fill="rgba(110,103,96,.75)">DULUTH</text>
          </g>
          <!-- HQ -->
          <circle cx="322.7" cy="315" r="12" fill="rgba(54,79,54,.16)"/>
          <circle cx="322.7" cy="315" r="5.5" fill="#364F36"/>
          <text x="323" y="298" text-anchor="middle" font-family="Inconsolata,monospace" font-size="10" font-weight="600" letter-spacing="1.1" fill="#364F36">BLOOMINGTON HQ</text>
          <text x="540" y="400" text-anchor="middle" font-family="Inconsolata,monospace" font-size="9" font-weight="600" letter-spacing="1.6" fill="rgba(110,103,96,.65)">MINNESOTA</text>
          <!-- caregivers on the road, headed everywhere inside the circle -->
          <circle class="cov-car" cx="322.7" cy="315" r="3.5" fill="#364F36">
            <animateMotion dur="6s" repeatCount="indefinite" calcMode="linear" keyPoints="0;1;1;0" keyTimes="0;0.42;0.55;1" path="M0,0 Q11,-20 17,-40"/>
          </circle>
          <circle class="cov-car" cx="322.7" cy="315" r="3.5" fill="#364F36">
            <animateMotion dur="11s" repeatCount="indefinite" calcMode="linear" keyPoints="0;1;1;0" keyTimes="0;0.42;0.55;1" path="M0,0 Q-41,-7 -80,-5" begin="1.4s"/>
          </circle>
          <circle class="cov-car" cx="322.7" cy="315" r="3.5" fill="#364F36">
            <animateMotion dur="8s" repeatCount="indefinite" calcMode="linear" keyPoints="0;1;1;0" keyTimes="0;0.42;0.55;1" path="M0,0 Q-37,25 -73,47" begin="3.1s"/>
          </circle>
          <circle class="cov-car" cx="322.7" cy="315" r="3.5" fill="#364F36">
            <animateMotion dur="7s" repeatCount="indefinite" calcMode="linear" keyPoints="0;1;1;0" keyTimes="0;0.42;0.55;1" path="M0,0 Q28,17 51,40" begin="4.6s"/>
          </circle>
          <circle class="cov-car" cx="322.7" cy="315" r="3.5" fill="#364F36">
            <animateMotion dur="10s" repeatCount="indefinite" calcMode="linear" keyPoints="0;1;1;0" keyTimes="0;0.42;0.55;1" path="M0,0 Q-36,-24 -68,-45" begin="6s"/>
          </circle>
        </svg>`;

export default function MnMap() {
  return <div className="hero-map-svg" dangerouslySetInnerHTML={{ __html: svg }} />;
}
