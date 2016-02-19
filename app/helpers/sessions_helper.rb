module SessionsHelper
  def logout
    session[:userId] = nil
    redirect_to root_path, :error => "logged out"
  end
end
