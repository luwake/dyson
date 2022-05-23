import Machines_D_5 from '../Machines_D/Machines_D_5'
import Machines_D_8 from '../Machines_D/Machines_D_8'
import Machines_B_9 from '../Machines_B/Machines_B_9'
import Options from '../Options'
import Products_C_6 from '../Products_C/Products_C_6'

const Products_D_6_Line_1 = (output = 60, machine = 0) => {
  if (machine > 0) {
    output = machine * (60 / 3.3)
  } else {
    machine = output / (60 / 3.3)
  }
  return {
    name: '重氢',
    icon: '/static/img/products/d6.png',
    machine: Machines_D_5(machine.toFixed(1)),
    children: [
      Products_C_6(output)
    ],
    output
  }
}

const Products_D_6_Line_2 = (output = 60, machine = 0) => {
  if (machine > 0) {
    output = machine * (60 / 1)
  } else {
    machine = output / (60 / 1)
  }
  return {
    name: '重氢',
    icon: '/static/img/products/d6.png',
    machine: Machines_B_9(machine.toFixed(1)),
    children: [
      Products_C_6(output * 2)
    ],
    output
  }
}

const Products_D_6_Line_3 = (output = 60, machine = 0) => {
  if (machine > 0) {
    output = machine * (60 / 11.6)
  } else {
    machine = output / (60 / 11.6)
  }
  return {
    name: '重氢',
    icon: '/static/img/products/d6.png',
    machine: Machines_D_8(machine.toFixed(1)),
    children: [],
    output
  }
}

export default function Products_D_6 (output = 60, machine = 0, options) {
  options = options || Options
  let line
  if (Object.prototype.hasOwnProperty.call(options.Lines, 'D_6')) {
    line = options.Lines.D_6
  } else {
    line = 1
  }
  switch (line) {
    case 3:
      return Products_D_6_Line_3(output, machine, options)
    case 2:
      return Products_D_6_Line_2(output, machine, options)
    case 1:
    default:
      return Products_D_6_Line_1(output, machine, options)
  }
}
