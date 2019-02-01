<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
                <div>
                    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                        <h1 class="h5">Customer/ Project</h1>
                        <div class="btn-toolbar mb-2 mb-md-0">
                            <div class="btn-group mr-2">
                                <button class="btn btn-sm btn-outline-secondary">Start time</button>
                                <button class="btn btn-sm btn-outline-secondary">8:30</button>
                            </div>

                            <div class="btn-group mr-2">
                                <button class="btn btn-sm btn-outline-secondary">End time</button>
                                <button class="btn btn-sm btn-outline-secondary">17:30</button>
                            </div>

                            <div class="btn-group mr-2">
                                <button class="btn btn-sm btn-outline-secondary">Break time</button>
                                <button class="btn btn-sm btn-outline-secondary">12:00 - 13:00</button>
                            </div>
                        </div>
                    </div>

                    <div class="container-fluid">
                      <div class="row">
                        <div class="col-md-12">
                          <div class="table-responsive">
                            <table class="table table-borderless">
                              <thead>
                                <tr style="border-bottom:1px solid #dee2e6;">
                                  <th scope="col" width="10%">Date</th>
                                  <th scope="col" width="5%">Start</th>
                                  <th scope="col" width="5%">Finished</th>
                                  <th scope="col" width="5%">Break</th>
                                  <th scope="col" width="65%">Content</th>
                                  <th scope="col" width="5%">Total</th>
                                  <th scope="col" width="5%"></th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr style="border-bottom:1px solid #dee2e6;">
                                  <td>2019/01/15</td>
                                  <td>2:20</td>
                                  <td>2:20</td>
                                  <td>2:20</td>
                                  <td>Content A</td>
                                  <td>2:20</td>
                                  <td>
                                    <a href="#editModal1" data-toggle="modal">
                                      <img :src="'/img/edit.svg'" alt="" width="40px;">
                                    </a>
                                    <div class="modal fade" id="editModal1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                      <div class="modal-dialog modal-lg" role="document">
                                        <div class="modal-content">
                                          <div class="modal-header text-center bg-light">
                                            <h5 class="modal-title w-100" id="exampleModalLabel">Edit working time</h5>
                                            <!-- <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                              <span aria-hidden="true">&times;</span>
                                            </button> -->
                                          </div>
                                          <div class="modal-body">
                                            <div class="container-fluid p-4">
                                              <form>
                                                <div class="form-group row">
                                                  <label class="col-sm-2 col-form-label" align="right">Work Content</label>
                                                  <div class="col-sm-10">
                                                    <select class="form-control">
                                                      <option selected></option>
                                                      <option>...</option>
                                                    </select>
                                                  </div>
                                                </div>
                                                <div class="form-group row">
                                                  <label class="col-sm-2 col-form-label" align="right">Postscript</label>
                                                  <div class="col-sm-10">
                                                    <textarea class="form-control" rows="5"></textarea>
                                                  </div>
                                                </div>
                                                <div class="form-group row">
                                                  <label class="col-sm-2 col-form-label" align="right">Start time</label>
                                                  <div class="col-sm-4">
                                                    <!-- <textarea class="form-control" rows="5"></textarea> -->
                                                    <input type="text" class="form-control" name="" value="" />
                                                  </div>
                                                  <label class="col-sm-2 col-form-label" align="right">End time</label>
                                                  <div class="col-sm-4">
                                                    <!-- <textarea class="form-control" rows="5"></textarea> -->
                                                    <input type="text" class="form-control" name="" value="" />
                                                  </div>
                                                </div>
                                                <!-- <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea> -->
                                                <div class="row pt-2">
                                                  <div class="col-md-12" align="right">
                                                    <button type="button" class="btn btn-light" data-dismiss="modal">Cancel</button>
                                                    <button type="button" class="btn btn-info px-4">OK</button>
                                                  </div>
                                                </div>
                                              </form>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                                <tr style="border-bottom:1px solid #dee2e6;">
                                  <td>2019/01/16</td>
                                  <td>5:04</td>
                                  <td>5:04</td>
                                  <td>5:04</td>
                                  <td>Content B</td>
                                  <td>5:04</td>
                                  <td>
                                    <a href="#editModal2" data-toggle="modal">
                                      <img :src="'/img/edit.svg'" alt="" width="40px;">
                                    </a>
                                    <div class="modal fade" id="editModal2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                      <div class="modal-dialog modal-lg" role="document">
                                        <div class="modal-content">
                                          <div class="modal-header text-center bg-light">
                                            <h5 class="modal-title w-100" id="exampleModalLabel">Edit working time</h5>
                                          </div>
                                          <div class="modal-body">
                                            <div class="container-fluid p-4">
                                              <form>
                                                <div class="form-group row">
                                                  <label class="col-sm-2 col-form-label" align="right">Work Content</label>
                                                  <div class="col-sm-10">
                                                    <select class="form-control">
                                                      <option selected></option>
                                                      <option>...</option>
                                                    </select>
                                                  </div>
                                                </div>
                                                <div class="form-group row">
                                                  <label class="col-sm-2 col-form-label" align="right">Postscript</label>
                                                  <div class="col-sm-10">
                                                    <textarea class="form-control" rows="5"></textarea>
                                                  </div>
                                                </div>
                                                <div class="form-group row">
                                                  <label class="col-sm-2 col-form-label" align="right">Start time</label>
                                                  <div class="col-sm-4">
                                                    <!-- <textarea class="form-control" rows="5"></textarea> -->
                                                    <input type="text" class="form-control" name="" value="" />
                                                  </div>
                                                  <label class="col-sm-2 col-form-label" align="right">End time</label>
                                                  <div class="col-sm-4">
                                                    <!-- <textarea class="form-control" rows="5"></textarea> -->
                                                    <input type="text" class="form-control" name="" value="" />
                                                  </div>
                                                </div>
                                                <!-- <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea> -->
                                                <div class="row pt-2">
                                                  <div class="col-md-12" align="right">
                                                    <button type="button" class="btn btn-light" data-dismiss="modal">Cancel</button>
                                                    <button type="button" class="btn btn-info px-4">OK</button>
                                                  </div>
                                                </div>
                                              </form>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                                <tr style="border-bottom:1px solid #dee2e6;">
                                  <td>2019/01/17</td>
                                  <td>3:00</td>
                                  <td>3:00</td>
                                  <td>3:00</td>
                                  <td>Content C</td>
                                  <td>3:00</td>
                                  <td>
                                    <a href="#editModal3" data-toggle="modal">
                                      <img :src="'/img/edit.svg'" alt="" width="40px;">
                                    </a>
                                    <div class="modal fade" id="editModal3" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                      <div class="modal-dialog modal-lg" role="document">
                                        <div class="modal-content">
                                          <div class="modal-header text-center bg-light">
                                            <h5 class="modal-title w-100" id="exampleModalLabel">Edit working time</h5>
                                            <!-- <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                              <span aria-hidden="true">&times;</span>
                                            </button> -->
                                          </div>
                                          <div class="modal-body">
                                            <div class="container-fluid p-4">
                                              <form>
                                                <div class="form-group row">
                                                  <label class="col-sm-2 col-form-label" align="right">Work Content</label>
                                                  <div class="col-sm-10">
                                                    <select class="form-control">
                                                      <option selected></option>
                                                      <option>...</option>
                                                    </select>
                                                  </div>
                                                </div>
                                                <div class="form-group row">
                                                  <label class="col-sm-2 col-form-label" align="right">Postscript</label>
                                                  <div class="col-sm-10">
                                                    <textarea class="form-control" rows="5"></textarea>
                                                  </div>
                                                </div>
                                                <div class="form-group row">
                                                  <label class="col-sm-2 col-form-label" align="right">Start time</label>
                                                  <div class="col-sm-4">
                                                    <!-- <textarea class="form-control" rows="5"></textarea> -->
                                                    <input type="text" class="form-control" name="" value="" />
                                                  </div>
                                                  <label class="col-sm-2 col-form-label" align="right">End time</label>
                                                  <div class="col-sm-4">
                                                    <!-- <textarea class="form-control" rows="5"></textarea> -->
                                                    <input type="text" class="form-control" name="" value="" />
                                                  </div>
                                                </div>
                                                <!-- <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea> -->
                                                <div class="row pt-2">
                                                  <div class="col-md-12" align="right">
                                                    <button type="button" class="btn btn-light" data-dismiss="modal">Cancel</button>
                                                    <button type="button" class="btn btn-info px-4">OK</button>
                                                  </div>
                                                </div>
                                              </form>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                        <h1 class="h4" style="visibility:hidden;">Customer/ Project</h1>
                        <div class="btn-toolbar mb-2 mb-md-0">

                          <div class="btn-group mr-2 my-2">
                              <button class="btn btn-sm btn-primary" data-toggle="modal" data-target="#generateModal">Generate Document</button>
                              <!-- Modal -->
                              <div class="modal fade" id="generateModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog" role="document">
                                  <div class="modal-content">
                                    <div class="modal-header text-center bg-light">
                                      <h5 class="modal-title w-100" id="exampleModalLabel">Generate Document</h5>
                                      <!-- <h5 class="modal-title" id="exampleModalLabel">Modal tistlex</h5> -->
                                      <!-- <div class="d-flex justify-content-center">
                                        <h5 class="modal-title" id="exampleModalLabel">Modal tistlex</h5>
                                      </div>
                                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                      </button> -->
                                    </div>
                                    <div class="modal-body">
                                      <div class="container-fluid">
                                        <div class="row">
                                          <div class="col-md-12 text-center">
                                            <h4>Are you sure you want to generate the document?</h4>
                                          </div>
                                        </div>
                                        <div class="row my-2">
                                          <div class="col-md-12" align="center">
                                            <button type="button" class="btn btn-light btn-sm" data-dismiss="modal">Cancel</button>
                                            <button type="button" class="btn btn-info btn-sm">Yes, I'm sure</button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                          </div>

                          <div class="btn-group mr-2 my-2">
                              <button class="btn btn-sm btn-primary" data-toggle="modal" data-target="#uploadModal">Upload Document</button>
                              <!-- Modal -->
                              <div class="modal fade" id="uploadModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog" role="document">
                                  <div class="modal-content">
                                    <div class="modal-header text-center bg-light">
                                      <h5 class="modal-title w-100" id="exampleModalLabel">Upload Document</h5>
                                      <!-- <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                      </button> -->
                                    </div>
                                    <div class="modal-body">
                                      <div class="row">
                                        <div class="col-md-12">
                                          <div class="input-group my-3">
                                            <div class="input-group-prepend">
                                              <span class="input-group-text" id="inputGroupFileAddon01">Upload</span>
                                            </div>
                                            <div class="custom-file">
                                              <input type="file" class="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01">
                                              <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div class="row my-2">
                                        <div class="col-md-12" align="center">
                                          <button type="button" class="btn btn-light btn-sm" data-dismiss="modal">Cancel</button>
                                          <button type="button" class="btn btn-info btn-sm">Confirm upload</button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                          </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <div class="row justify-content-end">
          <div class="col-lg-8">
            <table class="table table-bordered">
              <tbody class="text-right">
                <tr>
                  <td>time</td>
                  <td>10:00:00</td>
                  <td rowspan="2" id="fontSize">Otto</td>
                  <td rowspan="2" id="fontSize">@mdo</td>
                </tr>
                <tr>
                  <td>time</td>
                  <td>5:00:00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <!-- <div class="d-flex flex-row-reverse">
          <div class="p-2" id="flexItem">
            <table class="table table-bordered">
              <tbody class="text-right">
                <tr>
                  <td>time</td>
                  <td>10:00:00</td>
                  <td rowspan="2" id="fontSize">Otto</td>
                  <td rowspan="2" id="fontSize">@mdo</td>
                </tr>
                <tr>
                  <td>time</td>
                  <td>5:00:00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div> -->
        <!-- <footer class="footer-custom">
          <div class="container-fluid">
            <div class="row">
              <div class="col-12">
                asfashdgkjajsghkasg
                asfashdgkjajsghkasgas
                pagda
                <br>
                asdasdasd
                <br>
                asdasdas
              </div>
            </div>
          </div>
        </footer> -->
    </div>
</template>

<style scoped>
    .inptRadius {
        border-radius: 0.5rem;
    }

    .tm-edit-btn {
        cursor: pointer;
    }
    /* #flexItem{
      width: 70%;
    } */
    #fontSize{
      font-size: 2.5rem;
    }
    @media only screen and (max-width: 480px){
      #fontSize{
        font-size: 1.5rem;
      }
    }
</style>

<script>
    const items = [{
            isActive: true,
            age: 40,
            name: {
                first: 'Dickerson',
                last: 'Macdonald'
            }
        },
        {
            isActive: false,
            age: 21,
            name: {
                first: 'Larsen',
                last: 'Shaw'
            }
        },
        {
            isActive: false,
            age: 9,
            name: {
                first: 'Mini',
                last: 'Navarro'
            },
            _rowVariant: 'success'
        },
        {
            isActive: false,
            age: 89,
            name: {
                first: 'Geneva',
                last: 'Wilson'
            }
        },
        {
            isActive: true,
            age: 38,
            name: {
                first: 'Jami',
                last: 'Carney'
            }
        },
        {
            isActive: false,
            age: 27,
            name: {
                first: 'Essie',
                last: 'Dunlap'
            }
        },
        {
            isActive: true,
            age: 40,
            name: {
                first: 'Thor',
                last: 'Macdonald'
            }
        },
        {
            isActive: true,
            age: 87,
            name: {
                first: 'Larsen',
                last: 'Shaw'
            },
            _cellVariants: {
                age: 'danger',
                isActive: 'warning'
            }
        },
        {
            isActive: false,
            age: 26,
            name: {
                first: 'Mitzi',
                last: 'Navarro'
            }
        },
        {
            isActive: false,
            age: 22,
            name: {
                first: 'Genevieve',
                last: 'Wilson'
            }
        },
        {
            isActive: true,
            age: 38,
            name: {
                first: 'John',
                last: 'Carney'
            }
        },
        {
            isActive: false,
            age: 29,
            name: {
                first: 'Dick',
                last: 'Dunlap'
            }
        }
    ]

    export default {
        name: 'dashboard',
        middleware: 'authenticated',
        data() {
            return {
                options: [{
                        value: null,
                        text: 'Please select an option'
                    },
                    {
                        value: 'a',
                        text: 'This is First option'
                    },
                    {
                        value: 'b',
                        text: 'Selected Option'
                    },
                    {
                        value: {
                            'C': '3PO'
                        },
                        text: 'This is an option with object value'
                    },
                    {
                        value: 'd',
                        text: 'This one is disabled',
                        disabled: true
                    }
                ],
                items: items,
                fields: [{
                        key: 'name',
                        label: 'Date',
                        sortable: true,
                        sortDirection: 'desc'
                    },
                    {
                        key: 'age',
                        label: 'Start time',
                        sortable: true,
                        'class': 'text-center'
                    },
                    {
                        key: 'isActive',
                        label: 'is Active'
                    },
                    {
                        key: 'actions',
                        label: 'Actions'
                    }
                ],
                currentPage: 1,
                perPage: 5,
                totalRows: items.length,
                pageOptions: [5, 10, 15],
                sortBy: null,
                sortDesc: false,
                sortDirection: 'asc',
                filter: null,
                modalInfo: {
                    title: '',
                    content: ''
                },
                text: ''
            }
        },
        computed: {
            sortOptions() {
                // Create an options list from our fields
                return this.fields
                    .filter(f => f.sortable)
                    .map(f => {
                        return {
                            text: f.label,
                            value: f.key
                        }
                    })
            }
        },
        methods: {
            info(item, index, button) {
                this.modalInfo.title = `Edit working time`
                this.modalInfo.content = JSON.stringify(item, null, 2)
                this.$root.$emit('bv::show::modal', 'modalInfo', button)
                this.text = JSON.stringify(item, null, 2)
            },
            resetModal() {
                this.modalInfo.title = ''
                this.modalInfo.content = ''
            },
            onFiltered(filteredItems) {
                // Trigger pagination to update the number of buttons/pages due to filtering
                this.totalRows = filteredItems.length
                this.currentPage = 1
            }
        }
    }

</script>

<!-- table-complete-1.vue -->
