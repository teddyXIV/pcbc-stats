interface ResetPasswordEmailTemplateProps {
    email: string,
    forgotPasswordToken: string
}

const ResetPasswordEmailTemplate = (props: ResetPasswordEmailTemplateProps) => (
    <div>
        <h1>Reset password for <b>{props.email}</b></h1>
        <p>
            TO reset your password, click on this link and follow the instructions:
        </p>
        <a href={`http://localhost:3000/reset-password?token=${props.forgotPasswordToken}`}>Reset password</a>
    </div>
)

export default ResetPasswordEmailTemplate;