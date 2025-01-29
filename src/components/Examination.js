import React from 'react';

export default function Examination() {
    return (
        <div>
            <div className="container">
                <h2 className='m-3' style={{ textAlign: 'center' }}>Exam Updates</h2>
                <div class="row">
                    <div class="col-sm-6 mb-3 mb-sm-0">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Exam 1</h5>
                                <p class="card-text">Exam's description
                                </p>
                                <a href="#" class="btn btn-primary">Exam Link</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Exam 2</h5>
                                <p class="card-text">Exam's description
                                </p>
                                <a href="#" class="btn btn-primary">Exam Link</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
