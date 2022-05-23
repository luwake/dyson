import Machines_A_8 from '../Machines_A/Machines_A_8'
import Products_D_4 from '../Products_D/Products_D_4'
import Options from '../Options'

const Products_F_6_Line_1 = (output = 60, machine = 0) => {
  if (machine > 0) {
    output = machine * 6
  } else {
    machine = output / 6
  }
  return {
    name: '临界光子',
    icon: '/static/img/products/f6.png',
    machine: Machines_A_8(machine.toFixed(1)),
    children: [],
    output
  }
}

const Products_F_6_Line_2 = (output = 60, machine = 0, options) => {
  if (machine > 0) {
    output = machine * 12
  } else {
    machine = output / 12
  }
  return {
    name: '临界光子',
    icon: '/static/img/products/f6.png',
    machine: Machines_A_8(machine.toFixed(1)),
    children: [
      Products_D_4((output * 0.033).toFixed(1), 0, options)
    ],
    output
  }
}

export default function Products_F_6 (output = 60, machine = 0, options) {
  options = options || Options
  let line
  if (Object.prototype.hasOwnProperty.call(options.Lines, 'F_6')) {
    line = options.Lines.F_6
  } else {
    line = 1
  }
  switch (line) {
    case 2:
      return Products_F_6_Line_2(output, machine, options)
    case 1:
    default:
      return Products_F_6_Line_1(output, machine, options)
  }
}
