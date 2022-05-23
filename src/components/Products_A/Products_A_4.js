import Materials_A_4 from '../Materials_A/Materials_A_4'
import Machines_D_3 from '../Machines_D/Machines_D_3'
import Machines_D_4 from '../Machines_D/Machines_D_4'
import Options from '../Options'

export default function Products_A_4 (output = 60, machine = 0, options) {
  options = options || Options
  let factory
  switch (options.Furnace) {
    case 2:
      if (machine > 0) {
        output = machine * (60 / 0.5)
      } else {
        machine = output / (60 / 0.5)
      }
      factory = Machines_D_4(machine.toFixed(1))
      break
    case 1:
    default:
      if (machine > 0) {
        output = machine * (60 / 1)
      } else {
        machine = output / (60 / 1)
      }
      factory = Machines_D_3(machine.toFixed(1))
  }
  return {
    name: '石材',
    icon: '/static/img/products/a4.png',
    machine: factory,
    children: [
      Materials_A_4(output)
    ],
    output
  }
}
