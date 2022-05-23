import Machines_B_9 from '../Machines_B/Machines_B_9'
import Products_E_5 from '../Products_E/Products_E_5'
import Products_D_6 from '../Products_D/Products_D_6'
import Products_A_0 from '../Products_A/Products_A_0'
import Options from '../Options'

export default function Products_C_11 (output = 60, machine = 0, options) {
  options = options || Options
  if (machine > 0) {
    output = machine * (60 / 8)
  } else {
    machine = output / (60 / 8)
  }
  return {
    name: '奇异物质',
    icon: '/static/img/products/c11.png',
    machine: Machines_B_9(machine.toFixed(1)),
    children: [
      Products_E_5(output * 2, 0, options),
      Products_D_6(output * 10, 0, options),
      Products_A_0(output * 2, 0, options)
    ],
    output
  }
}
