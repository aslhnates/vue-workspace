import { Permissions } from '@/lib/permissions'

class User {
  // NO
  constructor(details, traits = {}) {
    const { firstName, lastName } = details
    this.firstName = firstName
    this.lastName = lastName
    this.traits = traits

    this.sessionStartedAt = Date.now()
  }

  // YES
  get name() {
    return `${this.firstName} ${this.lastName}`
  }

  // YES
  get isAdmin() {
    return Permissions.granted(this, 'admin')
  }

  // YES in combination
  get currentSessionIsValid() {
    const tenMinutesInMiliseconds = 600000
    return (this.sessionStartedAt + tenMinutesInMiliseconds) <= Date.now()
  }

  extendSession() {
    this.sessionStartedAt = Date.now()
  }
}