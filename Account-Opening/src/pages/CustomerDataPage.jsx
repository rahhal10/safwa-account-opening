import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

function CustomerDataPage() {
  const location = useLocation()
  const navigate = useNavigate()
  const customerData = location.state?.customerData

  useEffect(() => {
    if (!customerData) {
      navigate('/')
    }
  }, [customerData, navigate])

  if (!customerData) return null

  const handleProceed = () => {
    // TODO: Proceed to SafeWatch check and then account opening
    alert('Proceeding to SafeWatch check and account opening...')
  }

  const handleBack = () => {
    navigate('/')
  }

  return (
    <div className="page-container">
      <div className="step-indicator">
        <div className="step completed">
          <div className="step-number">✓</div>
          <span>ID Verification</span>
        </div>
        <div className="step-line completed"></div>
        <div className="step active">
          <div className="step-number">2</div>
          <span>Customer Data</span>
        </div>
        <div className="step-line"></div>
        <div className="step">
          <div className="step-number">3</div>
          <span>Account Opening</span>
        </div>
      </div>

      <div className="card wide">
        <div className="card-header">
          <h1>Customer Information</h1>
          <p>Review the customer data retrieved from the government system</p>
        </div>

        <div className="data-sections">
          {/* ID Information */}
          <div className="data-section">
            <h2 className="section-title">Identification Details</h2>
            <div className="fields-grid">
              <div className="field-group">
                <label>National ID Number</label>
                <div className="field-value">{customerData.nationalId}</div>
              </div>
              <div className="field-group">
                <label>ID Serial Number</label>
                <div className="field-value">{customerData.idSerial}</div>
              </div>
              <div className="field-group">
                <label>ID Issue Date</label>
                <div className="field-value">{customerData.idIssueDate}</div>
              </div>
              <div className="field-group">
                <label>ID Expiry Date</label>
                <div className="field-value">{customerData.idExpiryDate}</div>
              </div>
            </div>
          </div>

          {/* English Name */}
          <div className="data-section">
            <h2 className="section-title">Name (English)</h2>
            <div className="fields-grid">
              <div className="field-group">
                <label>First Name</label>
                <div className="field-value">{customerData.firstNameEn}</div>
              </div>
              <div className="field-group">
                <label>Second Name</label>
                <div className="field-value">{customerData.secondNameEn}</div>
              </div>
              <div className="field-group">
                <label>Third Name</label>
                <div className="field-value">{customerData.thirdNameEn}</div>
              </div>
              <div className="field-group">
                <label>Last Name</label>
                <div className="field-value">{customerData.lastNameEn}</div>
              </div>
            </div>
          </div>

          {/* Arabic Name */}
          <div className="data-section">
            <h2 className="section-title">Name (Arabic)</h2>
            <div className="fields-grid rtl">
              <div className="field-group">
                <label>الاسم الأول</label>
                <div className="field-value">{customerData.firstNameAr}</div>
              </div>
              <div className="field-group">
                <label>الاسم الثاني</label>
                <div className="field-value">{customerData.secondNameAr}</div>
              </div>
              <div className="field-group">
                <label>الاسم الثالث</label>
                <div className="field-value">{customerData.thirdNameAr}</div>
              </div>
              <div className="field-group">
                <label>اسم العائلة</label>
                <div className="field-value">{customerData.lastNameAr}</div>
              </div>
            </div>
          </div>

          {/* Personal Information */}
          <div className="data-section">
            <h2 className="section-title">Personal Information</h2>
            <div className="fields-grid">
              <div className="field-group">
                <label>Date of Birth</label>
                <div className="field-value">{customerData.birthDate}</div>
              </div>
              <div className="field-group">
                <label>Nationality</label>
                <div className="field-value">{customerData.nationality}</div>
              </div>
              <div className="field-group">
                <label>Gender</label>
                <div className="field-value">{customerData.gender}</div>
              </div>
              <div className="field-group">
                <label>Marital Status</label>
                <div className="field-value">{customerData.maritalStatus}</div>
              </div>
              <div className="field-group">
                <label>Occupation</label>
                <div className="field-value">{customerData.occupation}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="card-actions">
          <button type="button" className="btn-secondary" onClick={handleBack}>
            ← Back
          </button>
          <button type="button" className="btn-primary" onClick={handleProceed}>
            Proceed to Account Opening →
          </button>
        </div>
      </div>
    </div>
  )
}

export default CustomerDataPage
