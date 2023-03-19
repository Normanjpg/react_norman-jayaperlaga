import React from 'react'

const ProductFreshnessForm = () => {
  return (
    <div>
        <div className="mb-3">
        <label htmlFor="formRadio" className="form-radio">
          Product Freshness
        </label>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
            defaultValue="Brand New"
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            Brand New
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
            defaultValue="Second Hand"
          />
          <label className="form-check-label" htmlFor="flexRadioDefault2">
            Second Hand
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault3"
            defaultValue="Refurbisned"
          />
          <label className="form-check-label" htmlFor="flexRadioDefault3">
            Refurbisned
          </label>
        </div>
      </div>
    </div>
  )
}

export default ProductFreshnessForm