import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function IdEntryPage() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    nationalId: '',
    birthDate: '',
    idSerial: '',
  })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const validate = () => {
    const newErrors = {}
    if (!formData.nationalId.trim()) {
      newErrors.nationalId = 'National ID is required'
    } else if (!/^\d{10}$/.test(formData.nationalId.trim())) {
      newErrors.nationalId = 'National ID must be 10 digits'
    }
    if (!formData.birthDate) {
      newErrors.birthDate = 'Birth date is required'
    }
    if (!formData.idSerial.trim()) {
      newErrors.idSerial = 'ID serial number is required'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return

    setLoading(true)

    // Simulate government API call
    // TODO: Replace with actual government API endpoint
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Mock response from government API
      const mockCustomerData = {
        nationalId: formData.nationalId,
        idSerial: formData.idSerial,
        birthDate: formData.birthDate,
        firstNameEn: 'John',
        secondNameEn: 'Michael',
        thirdNameEn: 'Robert',
        lastNameEn: 'Smith',
        firstNameAr: 'جون',
        secondNameAr: 'مايكل',
        thirdNameAr: 'روبرت',
        lastNameAr: 'سميث',
        nationality: 'United States',
        gender: 'Male',
        idExpiryDate: '2028-06-15',
        idIssueDate: '2023-06-15',
        occupation: 'Engineer',
        maritalStatus: 'Single',
      }

      navigate('/customer-data', { state: { customerData: mockCustomerData } })
    } catch (error) {
      setErrors({ form: 'Failed to fetch customer data. Please try again.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="page-container">
      <div className="step-indicator">
        <div className="step active">
          <div className="step-number">1</div>
          <span>ID Verification</span>
        </div>
        <div className="step-line"></div>
        <div className="step">
          <div className="step-number">2</div>
          <span>Customer Data</span>
        </div>
        <div className="step-line"></div>
        <div className="step">
          <div className="step-number">3</div>
          <span>Account Opening</span>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h1>Foreigner Account Opening</h1>
          <p>Enter the customer's identification details to retrieve their information</p>
        </div>

        <form onSubmit={handleSubmit} className="form">
          {errors.form && <div className="error-banner">{errors.form}</div>}

          <div className="form-group">
            <label htmlFor="nationalId">National ID Number</label>
            <input
              type="text"
              id="nationalId"
              name="nationalId"
              value={formData.nationalId}
              onChange={handleChange}
              placeholder="e.g. 2000232321"
              maxLength={10}
              className={errors.nationalId ? 'input-error' : ''}
            />
            {errors.nationalId && <span className="field-error">{errors.nationalId}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="birthDate">Date of Birth</label>
            <input
              type="date"
              id="birthDate"
              name="birthDate"
              value={formData.birthDate}
              onChange={handleChange}
              className={errors.birthDate ? 'input-error' : ''}
            />
            {errors.birthDate && <span className="field-error">{errors.birthDate}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="idSerial">ID Serial Number</label>
            <input
              type="text"
              id="idSerial"
              name="idSerial"
              value={formData.idSerial}
              onChange={handleChange}
              placeholder="e.g. KRF09904"
              className={errors.idSerial ? 'input-error' : ''}
            />
            {errors.idSerial && <span className="field-error">{errors.idSerial}</span>}
          </div>

          <button type="submit" className="btn-primary" disabled={loading}>
            {loading ? (
              <span className="btn-loading">
                <span className="spinner"></span>
                Fetching Data...
              </span>
            ) : (
              'Retrieve Customer Data'
            )}
          </button>
        </form>
      </div>
    </div>
  )
}

export default IdEntryPage
