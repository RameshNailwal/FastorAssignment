import battery from "../assets/battery.png"
import mobile from "../assets/mobile.png"
import wifi from "../assets/wifi.png"
import time from "../assets/time.png"

const StatusBar = () => {
  return (
    <div className="w-full h-11 flex items-center justify-between px-4 bg-white">
      
      <img
        src={time}
        alt="time"
        className="h-3 w-7"
      />

      <div className="flex items-center gap-2">
        <img
          src={mobile}
          alt="signal"
          className="h-3 w-4"
        />
        <img
          src={wifi}
          alt="wifi"
          className="h-3 w-4"
        />
        <img
          src={battery}
          alt="battery"
          className="h-3 w-4"
        />
      </div>
    </div>
  )
}

export default StatusBar
