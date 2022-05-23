import Machines_D_3 from '../Machines_D/Machines_D_3'
import Machines_D_4 from '../Machines_D/Machines_D_4'
import Options from '../Options'
import Products_A_3 from '../Products_A/Products_A_3'
import Products_C_0 from '../Products_C/Products_C_0'
import Products_D_5 from '../Products_D/Products_D_5'

export default function Products_B_3 (output = 60, machine = 0, options) {
  options = options || Options
  let factory
  switch (options.Furnace) {
    case 2:
      if (machine > 0) {
        output = machine * (60 / 1.5)
      } else {
        machine = output / (60 / 1.5)
      }
      factory = Machines_D_4(machine.toFixed(1))
      break
    case 1:
    default:
      if (machine > 0) {
        output = machine * (60 / 3)
      } else {
        machine = output / (60 / 3)
      }
      factory = Machines_D_3(machine.toFixed(1))
  }
  return {
    name: '钛合金',
    icon: '/static/img/products/b3.png',
    machine: factory,
    children: [
      Products_A_3(output, 0, options),
      Products_C_0(output, 0, options),
      Products_D_5(output * 2, 0, options)
    ],
    output
  }
}
