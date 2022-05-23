import Materials_A_6 from '../Materials_A/Materials_A_6'
import Machines_C_6 from '../Machines_C/Machines_C_6'

export default function Products_A_6 (output = 60, machine = 0) {
  if (machine > 0) {
    output = machine * (60 / 2)
  } else {
    machine = output / (60 / 2)
  }
  return {
    name: '精炼油',
    icon: '/static/img/products/a6.png',
    machine: Machines_C_6(machine.toFixed(1)),
    children: [
      Materials_A_6(output)
    ],
    output
  }
}
