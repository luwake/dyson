import Machines_D_0 from '../Machines_D/Machines_D_0'
import Machines_D_1 from '../Machines_D/Machines_D_1'
import Machines_D_2 from '../Machines_D/Machines_D_2'
import Options from '../Options'
import Products_D_4 from '../Products_D/Products_D_4'
import Products_G_4 from '../Products_G/Products_G_4'

const Products_E_6_Line_1 = (output = 60, machine = 0, options) => {
  options = options || Options
  let factory
  switch (options.Producer) {
    case 3:
      if (machine > 0) {
        output = machine * (60 / 6.7)
      } else {
        machine = output / (60 / 6.7)
      }
      factory = Machines_D_2(machine.toFixed(1))
      break
    case 2:
      if (machine > 0) {
        output = machine * (60 / 10)
      } else {
        machine = output / (60 / 10)
      }
      factory = Machines_D_1(machine.toFixed(1))
      break
    case 1:
    default:
      if (machine > 0) {
        output = machine * (60 / 13.3)
      } else {
        machine = output / (60 / 13.3)
      }
      factory = Machines_D_0(machine.toFixed(1))
  }
  return {
    name: '空间翘曲器',
    icon: '/static/img/products/e6.png',
    machine: factory,
    children: [
      Products_D_4(output, 0, options)
    ],
    output
  }
}

const Products_E_6_Line_2 = (output = 60, machine = 0, options) => {
  options = options || Options
  let factory
  switch (options.Producer) {
    case 3:
      if (machine > 0) {
        output = machine * (60 / 0.8)
      } else {
        machine = output / (60 / 0.8)
      }
      factory = Machines_D_2(machine.toFixed(1))
      break
    case 2:
      if (machine > 0) {
        output = machine * (60 / 1.3)
      } else {
        machine = output / (60 / 1.3)
      }
      factory = Machines_D_1(machine.toFixed(1))
      break
    case 1:
    default:
      if (machine > 0) {
        output = machine * (60 / 1.7)
      } else {
        machine = output / (60 / 1.7)
      }
      factory = Machines_D_0(machine.toFixed(1))
  }
  return {
    name: '空间翘曲器',
    icon: '/static/img/products/e6.png',
    machine: factory,
    children: [
      Products_G_4(output, 0, options)
    ],
    output
  }
}

export default function Products_E_6 (output = 60, machine = 0, options) {
  options = options || Options
  let line
  if (Object.prototype.hasOwnProperty.call(options.Lines, 'E_6')) {
    line = options.Lines.E_6
  } else {
    line = 1
  }
  switch (line) {
    case 2:
      return Products_E_6_Line_2(output, machine, options)
    case 1:
    default:
      return Products_E_6_Line_1(output, machine, options)
  }
}
