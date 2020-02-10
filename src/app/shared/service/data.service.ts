import { Injectable } from '@angular/core';
import * as firebase from 'firebase';


@Injectable()
export class DataService {

  private database: any;

  constructor() {
    this.database = firebase.database();
  }

  create(resource, data, id = null) {
    let newResource

    if (!id) {
      newResource = this.getReference(resource).push()
    } else {
      newResource = this.getReference(resource, id)
    }

    return newResource.set(data).then(() => newResource.key)
  }

  getOnce(resource, id = null) {
    return this.getReference(resource, id)
      .once('value')
      .then(snapshot => snapshot.val())
  }

  getReference(resource, id = null) {
    let ref = id ? `${resource}/${id}` : resource
    return this.database.ref(ref)
  }

  update(resource, id, data) {
    return this.getReference(resource, id).update(data)
  }
}
