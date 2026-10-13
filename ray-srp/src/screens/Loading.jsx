import StatusBar from '../components/StatusBar.jsx'
import './Loading.css'

function Sk({ w, h, r = 8, className = '', style }) {
  return <div className={`sk ${className}`} style={{ width: w, height: h, borderRadius: r, ...style }} />
}

function CardSkeleton() {
  return (
    <div className="lo-card">
      <div className="lo-card-row">
        <Sk w={104} h={20} />
        <Sk w={64} h={20} />
      </div>
      <Sk w={176} h={16} />
      <Sk w={'70%'} h={16} className="sk-green-anchor" />
      <div className="lo-card-tags">
        <Sk w={64} h={20} r={10} />
        <Sk w={64} h={20} r={10} />
        <Sk w={64} h={20} r={10} />
      </div>
      <div className="lo-card-green"><Sk w={44} h={38} r={8} className="sk-green" /></div>
    </div>
  )
}

export default function Loading() {
  return (
    <div className="device lo">
      <StatusBar />
      {/* header block */}
      <div className="lo-header">
        <Sk w={40} h={40} r={20} />
        <div className="lo-header-lines">
          <Sk w={200} h={22} />
          <Sk w={90} h={16} />
        </div>
        <Sk w={64} h={40} r={20} />
      </div>

      {/* offers row */}
      <div className="lo-offers">
        <Sk w={148} h={100} r={16} />
        <Sk w={148} h={100} r={16} />
        <Sk w={60} h={100} r={16} />
      </div>

      {/* white content */}
      <div className="lo-content">
        <div className="lo-rtc">
          <Sk w={48} h={48} r={12} className="sk-pink" />
          <div className="lo-header-lines">
            <Sk w={140} h={16} />
            <Sk w={90} h={16} />
          </div>
        </div>
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>
    </div>
  )
}
