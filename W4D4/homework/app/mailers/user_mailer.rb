class UserMailer < ApplicationMailer

  default from: 'everybody@appacademy.io'

  def welcome_email(user)
    @user = user
    @url = 'https://www.appacademy.io/'
    mail(to: user.email, subject: 'App Academy welcome you!')
  end

end
