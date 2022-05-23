import Machines_C_3 from '../Machines_C/Machines_C_3'
import Machines_D_8 from '../Machines_D/Machines_D_8'
import Options from '../Options'

const Products_B_6_Line_1 = (output = 60, machine = 0) => {
  if (machine > 0) {
    output = machine * (60 / 0.6)
  } else {
    machine = output / (60 / 0.6)
  }
  return {
    name: '可燃冰',
    icon: '/static/img/products/b6.png',
    machine: Machines_D_8(machine.toFixed(1)),
    children: [],
    output
  }
}

const Products_B_6_Line_2 = (output = 60, machine = 0) => {
  if (machine > 0) {
    output = machine * (60 / 0.3)
  } else {
    machine = output / (60 / 0.3)
  }
  return {
    name: '可燃冰',
    icon: '/static/img/products/b6.png',
    machine: Machines_C_3(machine.toFixed(1)),
    children: [],
    output
  }
}

export default function Products_B_6 (output = 60, machine = 0, options) {
  options = options || Options
  let line
  if (Object.prototype.hasOwnProperty.call(options.Lines, 'B_6')) {
    line = options.Lines.B_6
  } else {
    line = 1
  }
  switch (line) {
    case 2:
      return Products_B_6_Line_2(output, machine, options)
    case 1:
    default:
      return Products_B_6_Line_1(output, machine, options)
  }
}
