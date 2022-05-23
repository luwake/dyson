import Machines_D_6 from '../Machines_D/Machines_D_6'
import Products_A_7 from '../Products_A/Products_A_7'
import Products_A_6 from '../Products_A/Products_A_6'
import Materials_A_7 from '../Materials_A/Materials_A_7'
import Options from '../Options'

export default function Products_B_7 (output = 60, machine = 0, options) {
  options = options || Options
  if (machine > 0) {
    output = machine * (60 / 6)
  } else {
    machine = output / (60 / 6)
  }
  return {
    name: '有机晶体',
    icon: '/static/img/products/b7.png',
    machine: Machines_D_6(machine.toFixed(1)),
    children: [
      Products_A_7(output * 2, 0, options),
      Products_A_6(output, 0, options),
      Materials_A_7(output)
    ],
    output
  }
}
