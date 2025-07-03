import './style.css'
import QRCode from 'qrcode'

const textInput = document.querySelector('#textInput')
const generateBtn = document.querySelector('#generateBtn')
const qrOutput = document.querySelector('#qrOutput')

async function generateQR() {
  const text = textInput.value.trim()
  
  if (!text) {
    alert('Please enter text to generate QR code')
    return
  }
  
  try {
    qrOutput.innerHTML = ''
    
    const canvas = document.createElement('canvas')
    await QRCode.toCanvas(canvas, text, {
      width: 256,
      margin: 2,
      color: {
        dark: '#000000',
        light: '#FFFFFF'
      }
    })
    
    qrOutput.appendChild(canvas)
    
    const downloadBtn = document.createElement('button')
    downloadBtn.textContent = 'Download QR Code'
    downloadBtn.onclick = () => {
      const link = document.createElement('a')
      link.download = 'qrcode.png'
      link.href = canvas.toDataURL()
      link.click()
    }
    qrOutput.appendChild(downloadBtn)
    
  } catch (error) {
    console.error('Error generating QR code:', error)
    alert('Error generating QR code')
  }
}

generateBtn.addEventListener('click', generateQR)
textInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    generateQR()
  }
})
