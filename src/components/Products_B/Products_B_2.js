import Machines_D_3 from '../Machines_D/Machines_D_3'
import Machines_D_4 from '../Machines_D/Machines_D_4'
import Options from '../Options'
import Products_A_2 from '../Products_A/Products_A_2'

export default function Products_B_2 (output = 60, machine = 0, options) {
  options = options || Options
  let factory
  switch (options.Furnace) {
    case 2:
      if (machine > 0) {
        output = machine * (60 / 1)
      } else {
        machine = output / (60 / 1)
      }
      factory = Machines_D_4(machine.toFixed(1))
      break
    case 1:
    default:
      if (machine > 0) {
        output = machine * (60 / 2)
      } else {
        machine = output / (60 / 2)
      }
      factory = Machines_D_3(machine.toFixed(1))
  }
  return {
    name: '晶格硅',
    icon: '/static/img/products/b2.png',
    machine: factory,
    children: [
      Products_A_2(output, 0, options)
    ],
    output
  }
}
