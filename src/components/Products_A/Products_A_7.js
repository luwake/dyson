import Products_A_6 from './Products_A_6'
import Products_A_5 from './Products_A_5'
import Machines_D_6 from '../Machines_D/Machines_D_6'
import Options from '../Options'

export default function Products_A_7 (output = 60, machine = 0, options) {
  options = options || Options
  if (machine > 0) {
    output = machine * (60 / 3)
  } else {
    machine = output / (60 / 3)
  }
  return {
    name: '塑料',
    icon: '/static/img/products/a7.png',
    machine: Machines_D_6(machine.toFixed(1)),
    children: [
      Products_A_6(output * 2, 0, options),
      Products_A_5(output, 0, options)
    ],
    output
  }
}
