import Machines_B_9 from '../Machines_B/Machines_B_9'
import Products_F_6 from './Products_F_6'

export default function Products_F_7 (output = 60, machine = 0) {
  if (machine > 0) {
    output = machine * (60 / 1)
  } else {
    machine = output / (60 / 1)
  }
  return {
    name: '反物质',
    icon: '/static/img/products/f7.png',
    machine: Machines_B_9(machine.toFixed(1)),
    children: [
      Products_F_6(output)
    ],
    output
  }
}
