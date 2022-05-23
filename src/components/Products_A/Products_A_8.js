import Products_A_5 from './Products_A_5'
import Products_D_5 from '../Products_D/Products_D_5'
import Machines_D_6 from '../Machines_D/Machines_D_6'
import Options from '../Options'
import Products_B_6 from '../Products_B/Products_B_6'

const Products_A_8_Line_1 = (output = 60, machine = 0, options) => {
  if (machine > 0) {
    output = machine * (60 / 1.5)
  } else {
    machine = output / (60 / 1.5)
  }
  return {
    name: '石墨烯',
    icon: '/static/img/products/a8.png',
    machine: Machines_D_6(machine.toFixed(1)),
    children: [
      Products_D_5(output * 0.5, 0, options),
      Products_A_5(output * 1.5, 0, options)
    ],
    output
  }
}
const Products_A_8_Line_2 = (output = 60, machine = 0, options) => {
  if (machine > 0) {
    output = machine * (60 / 1)
  } else {
    machine = output / (60 / 1)
  }
  return {
    name: '石墨烯',
    icon: '/static/img/products/a8.png',
    machine: Machines_D_6(machine.toFixed(1)),
    children: [
      Products_B_6(output, 0, options)
    ],
    output
  }
}

export default function Products_A_8 (output = 60, machine = 0, options) {
  options = options || Options
  let line
  if (Object.prototype.hasOwnProperty.call(options.Lines, 'A_8')) {
    line = options.Lines.A_8
  } else {
    line = 1
  }
  switch (line) {
    case 2:
      return Products_A_8_Line_2(output, machine, options)
    case 1:
    default:
      return Products_A_8_Line_1(output, machine, options)
  }
}
