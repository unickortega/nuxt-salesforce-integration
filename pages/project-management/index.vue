<template>
  <div class="container-fluid">
    <div class="d-flex flex-row bd-highlight mb-3">
      <div class="p-2 bd-highlight">
        <h4>Manage Project</h4>
      </div>
      <div class="p-2 bd-highlight">
        <select class="form-control form-control-sm">
          <option>Select Term</option>
        </select>
      </div>`
      <div class="p-2 bd-highlight">
        <div class="input-group input-group-sm mb-3">
          <input type="text" class="form-control" placeholder="input search word" aria-label="Recipient's username" aria-describedby="button-addon2">
          <div class="input-group-append">
            <button class="btn btn-outline-secondary" type="button" id="btn2">Search</button>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="container-fluid">
      <div class="table-responsive">
        <table class="table table-sm">
        <thead>
          <tr>
            <th scope="col">期間</th>
            <th scope="col">プロジェクト名</th>
            <th scope="col">クライアント名</th>
            <th scope="col">金額</th>
            <th scope="col">見積書</th>
            <th scope="col">注文書</th>
            <th scope="col">契約内容変更</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
        </table>
      </div>
    </div> -->
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <div class="table-responsive">
            <table class="table table-borderless">
              <thead>
                <tr style="border-bottom:1px solid #dee2e6;">
                  <td scope="col" width="15%">期間</td>
                  <td scope="col" width="20%">プロジェクト名</td>
                  <td scope="col" width="25%">クライアント名</td>
                  <td scope="col" width="10%">金額</td>
                  <td scope="col" width="10%">見積書</td>
                  <td scope="col" width="10%">注文書</td>
                  <td scope="col" width="10%">契約内容変更</td>
                </tr>
              </thead>
              <tbody>
                <tr style="border-bottom:1px solid #dee2e6;">
                  <td>2018/10/01-2018/12/07</td>
                  <td>Dummy Project A</td>
                  <td>Client Name A</td>
                  <td>$150,000</td>
                  <td>
                    <a href="#previewModal1" data-toggle="modal">Preview</a>
                    <!-- Modal -->
                    <div class="modal fade" id="previewModal1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div class="modal-dialog modal-lg" role="document">
                        <div class="modal-content">
                          <div class="modal-header text-center bg-light">
                            <h5 class="modal-title w-100" id="exampleModalLabel">Estimated Document Preview</h5>
                            <!-- <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                            </button> -->
                          </div>
                          <div class="modal-body">
                            <div class="container-fluid">
                              <div class="row justify-content-center">
                                <div class="col-md-8" align="center">
                                  Document goes here!!!
                                </div>
                              </div>
                              <div class="row">
                                <div class="col-md-12" align="right">
                                  <button type="button" class="btn btn-light" data-dismiss="modal">Cancel</button>
                                  <button type="button" class="btn btn-info">OK</button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <a href="#previewModal2" data-toggle="modal">Preview</a>
                    <!-- Modal -->
                    <div class="modal fade" id="previewModal2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div class="modal-dialog modal-lg" role="document">
                        <div class="modal-content">
                          <div class="modal-header text-center bg-light">
                            <h5 class="modal-title w-100" id="exampleModalLabel">Order Document Preview</h5>
                            <!-- <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                            </button> -->
                          </div>
                          <div class="modal-body">
                            <div class="container-fluid">
                              <div class="row justify-content-center">
                                <div class="col-md-8" align="center">
                                  Document goes here!!!
                                </div>
                              </div>
                              <div class="row">
                                <div class="col-md-12" align="right">
                                  <button type="button" class="btn btn-light" data-dismiss="modal">Cancel</button>
                                  <button type="button" class="btn btn-info">OK</button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <a href="#requestModal" class="disabled" data-toggle="modal">Request</a>
                    <!-- Modal -->
                    <div class="modal fade" id="requestModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div class="modal-dialog" role="document">
                        <div class="modal-content">
                          <div class="modal-header text-center bg-light">
                            <h5 class="modal-title w-100" id="exampleModalLabel">Request</h5>
                            <!-- <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                            </button> -->
                          </div>
                          <div class="modal-body">
                            <div class="container-fluid">
                              <form>
                                <div class="form-group row">
                                  <label class="col-sm-2 col-form-label" align="right">Content</label>
                                  <div class="col-sm-10">
                                    <select class="form-control">
                                      <option selected></option>
                                      <option>...</option>
                                    </select>
                                  </div>
                                </div>
                                <div class="form-group row">
                                  <label class="col-sm-2 col-form-label" align="right">Details</label>
                                  <div class="col-sm-10">
                                    <textarea class="form-control" rows="5"></textarea>
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
                <!-- row 2 starts here -->
                <tr style="border-bottom:1px solid #dee2e6;">
                  <td>2018/10/02-2018/12/07</td>
                  <td>Dummy Project B</td>
                  <td>Client Name B</td>
                  <td>$224,453</td>
                  <td>
                    <a href="#previewModal3" data-toggle="modal">Preview</a>
                    <!-- Modal -->
                    <div class="modal fade" id="previewModal3" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div class="modal-dialog modal-lg" role="document">
                        <div class="modal-content">
                          <div class="modal-header text-center bg-light">
                            <h5 class="modal-title w-100" id="exampleModalLabel">Estimated Document Preview</h5>
                            <!-- <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                            </button> -->
                          </div>
                          <div class="modal-body">
                            <div class="container-fluid">
                              <div class="row justify-content-center">
                                <div class="col-md-8" align="center">
                                  Document goes here!!!
                                </div>
                              </div>
                              <div class="row">
                                <div class="col-md-12" align="right">
                                  <button type="button" class="btn btn-light" data-dismiss="modal">Cancel</button>
                                  <button type="button" class="btn btn-info">OK</button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <a href="#previewModal4" data-toggle="modal">Preview</a>
                    <!-- Modal -->
                    <div class="modal fade" id="previewModal4" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div class="modal-dialog modal-lg" role="document">
                        <div class="modal-content">
                          <div class="modal-header text-center bg-light">
                            <h5 class="modal-title w-100" id="exampleModalLabel">Order Document Preview</h5>
                            <!-- <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                            </button> -->
                          </div>
                          <div class="modal-body">
                            <div class="container-fluid">
                              <div class="row justify-content-center">
                                <div class="col-md-8" align="center">
                                  Document goes here!!!
                                </div>
                              </div>
                              <div class="row">
                                <div class="col-md-12" align="right">
                                  <button type="button" class="btn btn-light" data-dismiss="modal">Cancel</button>
                                  <button type="button" class="btn btn-info">OK</button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <a href="#requestModal2" class="disabled" data-toggle="modal">Request</a>
                    <!-- Modal -->
                    <div class="modal fade" id="requestModal2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div class="modal-dialog" role="document">
                        <div class="modal-content">
                          <div class="modal-header text-center bg-light">
                            <h5 class="modal-title w-100" id="exampleModalLabel">Request</h5>
                            <!-- <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                            </button> -->
                          </div>
                          <div class="modal-body">
                            <div class="container-fluid">
                              <form>
                                <div class="form-group row">
                                  <label class="col-sm-2 col-form-label" align="right">Content</label>
                                  <div class="col-sm-10">
                                    <select class="form-control">
                                      <option selected></option>
                                      <option>...</option>
                                    </select>
                                  </div>
                                </div>
                                <div class="form-group row">
                                  <label class="col-sm-2 col-form-label" align="right">Details</label>
                                  <div class="col-sm-10">
                                    <textarea class="form-control" rows="5"></textarea>
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
                <!-- row 3 start here -->
                <tr style="border-bottom:1px solid #dee2e6;">
                  <td>2018/10/03-2018/12/07</td>
                  <td>Dummy Project C</td>
                  <td>Client Name C</td>
                  <td>$203,444</td>
                  <td>
                    <a href="#previewModal5" data-toggle="modal">Preview</a>
                    <!-- Modal -->
                    <div class="modal fade" id="previewModal5" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div class="modal-dialog modal-lg" role="document">
                        <div class="modal-content">
                          <div class="modal-header text-center bg-light">
                            <h5 class="modal-title w-100" id="exampleModalLabel">Estimated Document Preview</h5>
                            <!-- <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                            </button> -->
                          </div>
                          <div class="modal-body">
                            <div class="container-fluid">
                              <div class="row justify-content-center">
                                <div class="col-md-8" align="center">
                                  Document goes here!!!
                                </div>
                              </div>
                              <div class="row">
                                <div class="col-md-12" align="right">
                                  <button type="button" class="btn btn-light" data-dismiss="modal">Cancel</button>
                                  <button type="button" class="btn btn-info">OK</button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <a href="#previewModal6" data-toggle="modal">Preview</a>
                    <!-- Modal -->
                    <div class="modal fade" id="previewModal6" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div class="modal-dialog modal-lg" role="document">
                        <div class="modal-content">
                          <div class="modal-header text-center bg-light">
                            <h5 class="modal-title w-100" id="exampleModalLabel">Order Document Preview</h5>
                            <!-- <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                            </button> -->
                          </div>
                          <div class="modal-body">
                            <div class="container-fluid">
                              <div class="row justify-content-center">
                                <div class="col-md-8" align="center">
                                  Document goes here!!!
                                </div>
                              </div>
                              <div class="row">
                                <div class="col-md-12" align="right">
                                  <button type="button" class="btn btn-light" data-dismiss="modal">Cancel</button>
                                  <button type="button" class="btn btn-info">OK</button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <a href="#requestModal3" data-toggle="modal">Request</a>
                    <!-- Modal -->
                    <div class="modal fade" id="requestModal3" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div class="modal-dialog" role="document">
                        <div class="modal-content">
                          <div class="modal-header text-center bg-light">
                            <h5 class="modal-title w-100" id="exampleModalLabel">Request</h5>
                            <!-- <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                            </button> -->
                          </div>
                          <div class="modal-body">
                            <div class="container-fluid">
                              <form>
                                <div class="form-group row">
                                  <label class="col-sm-2 col-form-label" align="right">Content</label>
                                  <div class="col-sm-10">
                                    <select class="form-control">
                                      <option selected></option>
                                      <option>...</option>
                                    </select>
                                  </div>
                                </div>
                                <div class="form-group row">
                                  <label class="col-sm-2 col-form-label" align="right">Details</label>
                                  <div class="col-sm-10">
                                    <textarea class="form-control" rows="5"></textarea>
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
  </div>
</template>

<script>
export default {
  middleware: 'authenticated',
}
</script>

<style lang="css">
</style>
