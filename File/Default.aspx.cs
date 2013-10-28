using System;

namespace FileManager
{
    using System.Configuration;
    using System.IO;
    using System.Web;

    using IZ.WebFileManager;

    public partial class Default : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!HttpContext.Current.Request.QueryString.HasKeys())
            {
                // acesso negado
                Response.Write("Projeto inexistente");
                Response.End();
                return;
            }

            string project = HttpContext.Current.Request.QueryString["p"];
            var basePath = ConfigurationManager.AppSettings["basePath"];
            var root = basePath + "/" + project;

            var folder = Server.MapPath(root);
            if (!Directory.Exists(folder))
            {
                Directory.CreateDirectory(folder);
            }

            FileManager1.RootDirectories.Add(new RootDirectory { DirectoryPath = basePath + "/" + project, Text = project, });
        }
    }
}