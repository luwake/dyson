import Machines_D_6 from '../Machines_D/Machines_D_6'
import Machines_C_4 from '../Machines_C/Machines_C_4'
import Products_A_6 from '../Products_A/Products_A_6'
import Materials_A_4 from '../Materials_A/Materials_A_4'
import Materials_A_7 from '../Materials_A/Materials_A_7'
import Options from '../Options'

function Products_D_5_Line_1 (output = 60, machine = 0) {
  if (machine > 0) {
    output = machine * (60 / 1.5)
  } else {
    machine = output / (60 / 1.5)
  }
  return {
    name: '硫酸',
    icon: '/static/img/products/d5.png',
    machine: Machines_D_6(machine.toFixed(1)),
    children: [
      Products_A_6(output * 1.5),
      Materials_A_4(output * 2),
      Materials_A_7(output)
    ],
    output
  }
}
function Products_D_5_Line_2 (output = 60, machine = 0) {
  if (machine > 0) {
    output = machine * (60 / 1.2)
  } else {
    machine = output / (60 / 1.2)
  }
  return {
    name: '硫酸',
    icon: '/static/img/products/d5.png',
    machine: Machines_C_4(machine.toFixed(1)),
    children: [],
    output
  }
}

export default function Products_D_5 (output = 60, machine = 0, options) {
  options = options || Options
  let line
  if (Object.prototype.hasOwnProperty.call(options.Lines, 'D_5')) {
    line = options.Lines.D_5
  } else {
    line = 1
  }
  switch (line) {
    case 2:
      return Products_D_5_Line_2(output, machine, options)
    case 1:
    default:
      return Products_D_5_Line_1(output, machine, options)
  }
}
