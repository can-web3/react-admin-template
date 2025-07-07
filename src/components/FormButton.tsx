export default function FormButton({
  isSubmitting
}) {
  return (
    <button type="submit" className="btn-primary mt-6" disabled={isSubmitting}>
        Gönder
    </button>
  )
}
