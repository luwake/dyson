import Machines_D_6 from '../Machines_D/Machines_D_6'
import Products_A_8 from '../Products_A/Products_A_8'
import Products_A_3 from '../Products_A/Products_A_3'
import Options from '../Options'

export default function Products_D_8 (output = 60, machine = 0, options) {
  options = options || Options
  if (machine > 0) {
    output = machine * (60 / 2)
  } else {
    machine = output / (60 / 2)
  }
  return {
    name: '碳纳米管',
    icon: '/static/img/products/d8.png',
    machine: Machines_D_6(machine.toFixed(1)),
    children: [
      Products_A_8(output * 1.5, 0, options),
      Products_A_3(output * 0.5, 0, options)
    ],
    output
  }
}
