import { motion, useTransform } from "framer-motion"
function CheckIcon({ progress, status }) {
  const circleLength = useTransform(progress, [0, 100], [0, 1])
  const pathLength = useTransform(progress, [0, 95, 100], [0, 0, 1])

  const circleColor = useTransform(
    progress,
    [0, 95, 100],
    status === "real"
      ? ["#FFCC66", "#FFCC66", "#66BB66"] // green
      : ["#FFCC66", "#FFCC66", "#FF6666"] // red
  )

  return (
    <motion.svg width="120" height="120" viewBox="0 0 300 300">
      {status === "real" ? (
        // ✅ checkmark
        <motion.path
          transform="translate(60 85)"
          d="M3 50L45 92L134 3"
          fill="transparent"
          stroke="#66BB66"
          strokeWidth={8}
          style={{ pathLength }}
        />
      ) : (
        // ❌ cross
        <>
          <motion.path
            d="M80 80 L180 180"
            fill="transparent"
            stroke="#FF6666"
            strokeWidth={8}
            style={{ pathLength }}
          />
          <motion.path
            d="M180 80 L80 180"
            fill="transparent"
            stroke="#FF6666"
            strokeWidth={8}
            style={{ pathLength }}
          />
        </>
      )}

      {/* Circle */}
      <motion.path
        d="M 130 6 C 198.483 6 254 61.517 254 130 C 254 198.483 198.483 254 130 254 C 61.517 254 6 198.483 6 130 C 6 61.517 61.517 6 130 6 Z"
        fill="transparent"
        strokeWidth="8"
        stroke={circleColor}
        style={{ pathLength: circleLength }}
      />
    </motion.svg>
  )
}

export default CheckIcon;