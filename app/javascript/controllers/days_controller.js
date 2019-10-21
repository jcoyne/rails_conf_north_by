import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ["schedule"]

  selected(evt)  {
    let associated = evt.target.getAttribute('data-associated')
    this.scheduleTargets.forEach((item) => {
      if (item.id === associated) {
        item.classList.remove('isHidden')
      } else {
        item.classList.add('isHidden')
      }
    })
  }
}
